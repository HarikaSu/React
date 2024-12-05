import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FakesComp from './FakesComp';
import reportWebVitals from './reportWebVitals';
// import LifeCycle from './LifeCycle/LifeCycle';
import Updating from './LifeCycle/Updating';
// import FuncLifeCycle from "./ComponentCond/FuncLifeCycle"
// import FunctionComp from './FunctionComp';
// import Toggle from './ToggleSwitch/Toggle';
// import PortfolioComp from './PortfolioComp';
// import FunComp from './Menu/FunComp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AccordComp from "../src/BootstarpAccordian/vs-accordian/AccordianceComp"
// import AccordComp from '../src/BootstarpAccordian/vs-accordian/AccordComp';
// import Render from "../src/Conditional/RenderComp"
// import RenderingComp from "../src/Conditional/RenderingComp"
// import Sample from "./Sample"
// import Parent from "./ComponentCond/Parent"
// import Counter from "../src/ComponentCond/Counter"
// import SampleForm from './SampleForm/SampleForm';
// import Todo1 from './Todo/Todo1';
// import Port from "./Portfolioo/Port"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TableComp/> */}
    {/* <FakesComp/> */}
    {/* <PropComp name="Harika"/> */}
    {/* <FunComp/> */}
    {/* <ProfileCard name="Harika" city=""/> */}
    {/* <AccordComp/> */}
    {/* <AccordComp/> */}
    {/* <Render/> */}
    {/* <RenderingComp/> */}
    {/* <Parent/> */}
    {/* <Sample/> */}
    {/* <PortfolioComp/> */}
    {/* <Counter/> */}
    {/* <Toggle/> */}
    {/* <SampleForm/> */}
    {/* <Port/> */}
    {/* <Todo1/> */}
    {/* <LifeCycle/> */}
    <Updating/>
    {/* <FunctionComp/> */}
    {/* <FuncLifeCycle/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
