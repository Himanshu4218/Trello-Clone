import Header from "./components/Header";
import Main from "./components/Main";
import { useBg } from "./context/bgColorContext";

function App() {
  const { bgColor, colorIndex } = useBg();
  return (
    <div
      className={`min-h-screen`}
      style={{ backgroundColor: `${bgColor[colorIndex]}` }}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
