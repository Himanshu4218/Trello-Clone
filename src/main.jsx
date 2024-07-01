import React from "react";
import ReactDOM from "react-dom/client";
import { DragDropContext } from "react-beautiful-dnd";
import BgColorContextProvider from "./context/bgColorContext.jsx";
import App from "./App.jsx";
import "./index.css";

const onDragEnd = (result) => {
  const { source, destination } = result;
  console.log(source);
  console.log(destination);
  if (!destination) return;

  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  )
    return;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DragDropContext onDragEnd={onDragEnd}>
      <BgColorContextProvider>
        <App />
      </BgColorContextProvider>
    </DragDropContext>
  </React.StrictMode>
);
