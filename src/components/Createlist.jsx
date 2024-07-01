import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuid } from "uuid";
import Lists from "./Lists";
import { useBg } from "../context/bgColorContext";

const Createlist = () => {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("allList")) || []
  );
  const [list, setList] = useState("");
  const inputRef = useRef(null);
  const { lightColor, colorIndex } = useBg();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) return;

    const newList = {
      id: uuid(),
      name: list,
    };
    const updatedList = [...lists, newList];
    localStorage.setItem("allList", JSON.stringify(updatedList));
    setLists(updatedList);
    setList("");
    setShowForm(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [showForm]);

  return (
    <div className="mt-10 flex w-full p-8">
      <Lists lists={lists} setLists={setLists} />
      {!showForm && (
        <button
          className="px-2 py-1 self-start rounded text-white w-[20%] text-left"
          style={{ backgroundColor: lightColor[colorIndex] }}
          onClick={() => setShowForm(true)}
        >
          + Add List
        </button>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-[20%] bg-white flex flex-col self-start gap-2 p-2 rounded"
        >
          <textarea
            ref={inputRef}
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
            placeholder="Enter Content..."
            className="w-[100%] bg-slate-200 p-2 outline-none shadow rounded"
          />
          <div className="flex items-center gap-3">
            <button className="bg-green-600 text-white rounded px-2 py-1">
              Add List
            </button>
            <button onClick={() => setShowForm(false)}>
              <RxCross2 />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Createlist;
