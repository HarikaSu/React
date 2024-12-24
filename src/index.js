import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
// import PortfolioComp from "./PortfolioComp";
// import TableComp from "./TableComp";
// import Count from "./FunCycle/FunCycle";
// import FakesComp from "./FakesComp";
// import PropComp from "../src/PropComp";
// import FunComp from "./Menu/FunComp";
// import ProfileCard from "../src/Menu/ProfileCard";
// import AccordComp from "../src/BootstarpAccordian/vs-accordian/AccordComp";
// import Render from "./ConditionalRend/RenderComp";
// import RenderingComp from "./ConditionalRend/RenderingComp";
// // import Parent from './ComponentCond/Parent';
// import Sample from "./Sample";
// import Counter from "../src/ComponentCond/Counter";
// import Toggle from "./ToggleSwitch/Toggle";
// import SampleForm from "../src/SampleForm/SampleForm";
// // import Port from "./Portfolioo/Port";
// import Todo1 from "./Todo/Todo1";
// import LifeCycle from "./LifeCycle/LifeCycle";
// import Updating from "./LifeCycle/Updating";
// import FunctionComp from "./FunctionComp";
// import FuncLifeCycle from "./ComponentCond/FuncLifeCycle";
// import Calculator from "../src/FunCycle/Calculator";
// import FormComp from "../src/LifeCycle/FormComp";
// import ParentComp from "../src/ParentComp/Index";
// import Rooute from "./Routing/Rooute";
// // // import UseEfect from './UseEffect/UseEffect';
// import Routee from "./dynamicRouting/Routee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <PortfolioComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <TableComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Count />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <FakesComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <PropComp name="Harika" />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <FunComp />{" "}
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <ProfileCard name="Harika" city="" />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <AccordComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Render />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      {" "}
      <RenderingComp />{" "}
    </div>
    {/* <Parent/> */}
    {/* <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Sample />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Counter />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Toggle />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <SampleForm />
    </div>
    {/* <Port/> */}
    {/* <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <Todo1 />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
      }}
    >
      <LifeCycle />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <Updating />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        margin: "auto",
        justifyItems: "center",
      }}
    >
      <FunctionComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <FuncLifeCycle />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <Calculator />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <FormComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <ParentComp />
    </div>
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "250px",
        margin: "auto",
      }}
    >
      <Rooute />
    </div>
    {/* <UseEfect/>  */}
    {/* <div
      style={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        padding: "350px",
      }}
    >
      <Routee />
    </div>   */} 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
