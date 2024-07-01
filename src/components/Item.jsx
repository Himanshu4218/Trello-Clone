import { RxCross2 } from "react-icons/rx";
import { MdModeEditOutline } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ item, index, onClick, updateItem }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(item.name);
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditValue(e.target.value);
      updateItem(item.id, e.target.value);
      setIsEdit(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group w-full flex justify-between items-center bg-white shadow px-3 py-1 gap-2 cursor-pointer hover:scale-105 transition-all duration-300 rounded"
        >
          {isEdit ? (
            <input
              ref={inputRef}
              type="text"
              value={editValue}
              className="outline-none bg-gray-300 px-1 rounded"
              onBlur={() => setIsEdit(false)}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span>{item.name}</span>
          )}
          <div className="flex gap-2">
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setIsEdit(true)}
            >
              <MdModeEditOutline />
            </span>
            <span onClick={() => onClick(item.id)}>
              <RxCross2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
