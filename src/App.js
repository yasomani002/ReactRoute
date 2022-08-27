import "./App.css";
import About from "./Components/Hooks/Route/About";
import Contact from "./Components/Hooks/Route/Contact";
import Home from "./Components/Hooks/Route/Home";
import Service from "./Components/Hooks/Route/Service";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Hooks/Route/NavBar";
import UseState from "./Components/Hooks/Hooks/UseState";
import Protected from "./Components/Hooks/Route/Protected";
import Login from "./Components/Hooks/Route/Login";
import Registration from "./Components/Hooks/Route/Registration";

function App() {
  return (
    //  <UseState />
    <>
      <div className="main">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/service" element={ <Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Registration />} />
          <Route path="*" element={<Registration />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
