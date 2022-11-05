import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        Hola Mundo
      </div>
    </>
  );
}

export default App;
