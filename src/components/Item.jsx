import { RxCross2 } from "react-icons/rx";
import { MdModeEditOutline } from "react-icons/md";

const Item = ({ item }) => {
  return (
    <div className="group w-full flex justify-between items-center bg-white shadow px-3 py-1 gap-2 cursor-pointer hover:scale-105 transition-all duration-300 rounded">
      <span>{item.name}</span>
      <div className="flex gap-2">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MdModeEditOutline />
        </span>
        <span>
          <RxCross2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </span>
      </div>
    </div>
  );
};

export default Item;
