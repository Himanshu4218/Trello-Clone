import React from "react";
import { IoStar } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useBg } from "../context/bgColorContext";

const Mainhead = () => {
  const { lightColor, colorIndex } = useBg();

  const btnStyle = `px-2 py-1 rounded`;

  return (
    <div className="flex justify-between text-white px-5">
      <div className="flex gap-4 items-center">
        <h3>Things To Do</h3>
        <button
          className={`${btnStyle} py-2`}
          style={{ backgroundColor: lightColor[colorIndex] }}
        >
          <IoStar className="text-white" size={16} />
        </button>
        <button
          className={btnStyle}
          style={{ backgroundColor: lightColor[colorIndex] }}
        >
          Tech
        </button>
        <button
          className={btnStyle}
          style={{ backgroundColor: lightColor[colorIndex] }}
        >
          Private
        </button>
        <button
          className={btnStyle}
          style={{ backgroundColor: lightColor[colorIndex] }}
        >
          Invite
        </button>
      </div>
      <Sidebar />
    </div>
  );
};

export default Mainhead;
