import React,{Component} from "react";
import "./Toggle.css"
class Toggle extends Component{
    constructor(){
        super();
        this.state={isOn:true}
    }
    handleButton=()=>{
        this.setState({isOn:!this.state.isOn})
    }
    render(){
        return(
            <>
            <button className={this.state.isOn?"switchon":"switchoff"} onClick={this.handleButton}>{this.state.isOn?<h1>SwitchOff</h1>:<h1>SwitchOn</h1>}</button>
            <h1 className={this.state.isOn?"turnon":"turnoff"}>{this.state.isOn?<h1>TurnOn</h1>:<h1>TurnOff</h1>}</h1>
            </>
            
            
        )
    }

}
export default Toggle;