import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuid } from "uuid";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

const List = ({ list, onClick }) => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: item,
    };

    setItemList([...itemList, newItem]);
    setItem("");
    setShowForm(false);
  };

  const handleEditItem = (id, val) => {
    let updatedItems = [...itemList];
    updatedItems = updatedItems.map((item) =>
      item.id === id ? { ...item, name: val } : item
    );
    setItemList(updatedItems);
  };

  const handleRemoveItem = (id) => {
    let updatedItems = [...itemList];
    updatedItems = updatedItems.filter((item) => item.id !== id);
    setItemList(updatedItems);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [showForm]);

  return (
    <div className="w-[25%] p-3 flex flex-col items-start self-start bg-gray-300 rounded">
      <div className="w-full mb-2 font-semibold text-lg flex justify-between items-center">
        <span>{list.name}</span>
        <span onClick={() => onClick(list.id)} className="cursor-pointer">
          <RxCross2 />
        </span>
      </div>
      <Droppable droppableId={list.name}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            className="w-full flex flex-col gap-2 mb-3"
            {...provided.droppableProps}
          >
            {itemList.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={handleRemoveItem}
                  updateItem={handleEditItem}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {!showForm && (
        <button className="" onClick={() => setShowForm(true)}>
          + Add Card
        </button>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-[100%] bg-white flex flex-col self-start gap-2 p-2 rounded"
        >
          <textarea
            ref={inputRef}
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter Content..."
            className="w-[100%] bg-slate-200 p-2 outline-none shadow rounded"
          />
          <div className="flex items-center gap-3">
            <button className="bg-green-600 text-white rounded px-2 py-1">
              Add Card
            </button>
            <button
              onClick={() => {
                setItem("");
                setShowForm(false);
              }}
            >
              <RxCross2 />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default List;
