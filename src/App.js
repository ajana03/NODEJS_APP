import "./App.css";
// import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App text-white bg-black ">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
