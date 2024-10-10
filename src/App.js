import "./App.css";
// import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App text-white">
      <Navbar />
      <div className="container m-auto flex flex-grow sm:mb-[50] sm:max-w-[450]">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
