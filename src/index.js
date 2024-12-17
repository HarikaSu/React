import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from "./App";
import PortfolioComp from './PortfolioComp';
import TableComp from "./TableComp";
import Count from "./FunCycle/FunCycle";
import FakesComp from './FakesComp';
// import PropComp from "../src/PropComp"
import FunComp from './Menu/FunComp';
import ProfileCard from "../src/Menu/ProfileCard";
import AccordComp from '../src/BootstarpAccordian/vs-accordian/AccordComp';
import Render from "./ConditionalRend/RenderComp";
import RenderingComp from "./ConditionalRend/RenderingComp";
// // import Parent from './ComponentCond/Parent';
import Sample from "./Sample";
import Counter from "../src/ComponentCond/Counter";
import Toggle from './ToggleSwitch/Toggle';
import SampleForm from "../src/SampleForm/SampleForm";
import Port from "./Portfolioo/Port";
import Todo1 from './Todo/Todo1';
import LifeCycle from './LifeCycle/LifeCycle';
import Updating from './LifeCycle/Updating';
import FunctionComp from './FunctionComp';
import FuncLifeCycle from "./ComponentCond/FuncLifeCycle";
import Calculator from './FunCycle/FunCycle';
import FormComp from "../src/LifeCycle/FormComp";
import ParentComp from '../src/ParentComp/Index';
import Rooute from './Routing/Rooute';
// import UseEfect from './UseEffect/UseEffect';
import Routee from './dynamicRouting/Routee';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <PortfolioComp/>
    <TableComp/>
    <Count/> 
    <FakesComp/>
    {/* <PropComp name="Harika"/> */}
    <FunComp/> 
    <ProfileCard name="Harika" city=""/>
    <AccordComp/>
    <Render/>
    <RenderingComp/> 
    {/* <Parent/> */}
    <Sample/>
    <Counter/>
    <Toggle/>
    <SampleForm/>
    <Port/>
    <Todo1/>
    <LifeCycle/>
    <Updating/>
    <FunctionComp/>
    <FuncLifeCycle/>
    <Calculator/>
    <FormComp/>
    <ParentComp/>
    <Rooute/> 
    {/* <UseEfect/>  */}
    <Routee/>
    
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
