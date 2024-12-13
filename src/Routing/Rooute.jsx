import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import PageNotFound from "./PageNotFound";
import "./Rooute.css"

function Rooute() {
  return (
    
      <Router>
        <div style={{backgroundColor:"pink",padding:"20px",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
          <Link className="links" to="/home">Task1</Link>
          <Link className="links" to="/contact">Task2</Link>
          <Link className="links" to="/about">Task3</Link>
          <Link className="links" to="/login">Task4</Link>
        </div>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route> 
          <Route path="/home" element={<Task1/>}></Route>
          <Route path="/contact" element={<Task2 />}></Route>
          <Route path="/about" element={<Task3 />}></Route>
          <Route path="/login" element={<Task4 />}></Route>
        </Routes>
      </Router>
    
  );
}
export default Rooute;
