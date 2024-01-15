import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Heroview from "./components/Heroview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" overflow-x-hidden">
      <div>
        <Heroview />
      </div>
    </div>
  );
}

export default App;
