import "./App.css";
import About from "./Components/Hooks/Route/About";
import Contact from "./Components/Hooks/Route/Contact";
import Home from "./Components/Hooks/Route/Home";
import Service from "./Components/Hooks/Route/Service";
import UseState from "./Components/Hooks/UseState";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Hooks/Route/NavBar";

function App() {
  return (
    //  <UseState />
    <>
      <div className="main">
        <NavBar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
