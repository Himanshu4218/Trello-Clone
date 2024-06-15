import { createContext, useContext, useState } from "react";

const BgContext = createContext();

export const useBg = () => useContext(BgContext);

const BgColorContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState([
    "#0179c0",
    "#d29135",
    "#529839",
    "#b04631",
    "#8a609e",
    "#cc5a91",
  ]);
  const [darkColor, setDarkColor] = useState([
    "#015f99",
    "#a7712a",
    "#41732d",
    "#893725",
    "#6e4c7e",
    "#a04873",
  ]);
  const [lightColor, setLightColor] = useState([
    "#66add4",
    "#ddb77b",
    "#98c886",
    "#c27360",
    "#a889b4",
    "#da88aa",
  ]);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <BgContext.Provider
      value={{
        bgColor,
        lightColor,
        darkColor,
        setBgColor,
        colorIndex,
        setColorIndex,
      }}
    >
      {children}
    </BgContext.Provider>
  );
};

export default BgColorContextProvider;
