import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";


const App=()=>{
  return <div>
    <Navbar/>
    <Body/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
