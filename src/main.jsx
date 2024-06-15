import React from "react";
import ReactDOM from "react-dom/client";
import BgColorContextProvider from "./context/bgColorContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BgColorContextProvider>
      <App />
    </BgColorContextProvider>
  </React.StrictMode>
);
