import { useBg } from "../context/bgColorContext";

const Header = () => {
  const { darkColor, colorIndex } = useBg();

  return (
    <div
      className="h-12 flex items-center px-5"
      style={{ backgroundColor: `${darkColor[colorIndex]}` }}
    >
      <input
        type="text"
        placeholder="What needs to  be filtered?"
        className="h-[80%] w-[20%] p-2 px-3 rounded outline-none"
      />
    </div>
  );
};

export default Header;
