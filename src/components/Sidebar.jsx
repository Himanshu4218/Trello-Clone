import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useBg } from "../context/bgColorContext";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBgSidebar, setShowBgSidebar] = useState(false);
  const { lightColor, bgColor, colorIndex, setColorIndex } = useBg();
  return (
    <>
      <div
        className={`flex gap-1 items-center px-2 py-1 rounded`}
        style={{ backgroundColor: lightColor[colorIndex] }}
        onClick={() => setShowSidebar(true)}
      >
        <span>
          <HiDotsHorizontal />
        </span>
        <button>Show Menu</button>
      </div>
      <div
        className={`${
          showSidebar
            ? "translate-x-0 transition-all duration-300"
            : "translate-x-[100%] transition-all duration-300"
        } fixed right-0 top-0 h-screen bg-white w-[300px] text-black z-20`}
      >
        <div className="relative text-center border border-y-2 py-1 font-medium">
          <span>Menu</span>
          <span
            onClick={() => setShowSidebar(false)}
            className="cursor-pointer absolute right-2 top-2"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="mb-3"></div>
        <div
          className="flex gap-2 cursor-pointer px-3 items-center"
          onClick={() => setShowBgSidebar(true)}
        >
          <span className="w-5 h-5" style={{ backgroundColor: bgColor }}></span>
          <span>Change Background</span>
        </div>
      </div>
      <div
        className={`${
          showBgSidebar
            ? "translate-x-0 transition-all duration-300"
            : "translate-x-[100%] transition-all duration-300"
        } fixed right-0 top-0 h-screen bg-white w-[300px] text-black z-20`}
      >
        <div className="relative text-center border border-y-2 py-1 font-medium mb-3">
          <span>Change Background</span>
          <span
            onClick={() => setShowBgSidebar(false)}
            className="cursor-pointer absolute right-2 top-2"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-items-center">
          {bgColor.map((color, index) => {
            return (
              <span
                key={color}
                className="w-[130px] h-[80px] cursor-pointer"
                style={{ backgroundColor: `${color}` }}
                onClick={() => setColorIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
