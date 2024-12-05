// Task-1
// import React,{Component} from "react";

// class SampleForm extends Component{
//     constructor(){
//         super();
//         this.state={text:this.formSubmission}
//     }
//     formSubmission=(e)=>{
//         e.preventDefault();
//         this.setState({text:e.target.id1.value})
//     };
//     render(){
//         return(
//             <>
//             <form onSubmit={this.formSubmission}>
//                 <input id="id1" type="text" />
//                 <input type="Submit" />
//             </form>
//             <h1> {this.state.text}</h1>
//             </>

//         )
//     }

// }
// export default SampleForm;

// task-2

// import React, { Component } from "react";
// class SampleForm extends Component {
//   constructor() {
//     super();
//     this.state = { fname: "", fullname: "", sname: "", mob: "" };
//   }
//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       fullname: this.state.fname + this.state.sname + this.state.mob
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="fname" onChange={this.handleChange} />
//           <br></br>
//           <input type="text" name="sname" onChange={this.handleChange} />
//           <br></br>
//           <input type="text" name="mob" onChange={this.handleChange} />
//           <br/>
//           <input type="submit"/>
//         </form>
//         <h1>{this.state.fullname}</h1>
//       </div>
//     );
//   }
// }
// export default SampleForm;

import React, { Component } from "react";

class NumberChecker extends Component {
  constructor() {
    super();
    this.state = { number: "", result: "" };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ number: value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const num = parseInt(this.state.number);

    if (!isNaN(num)) {
      if (num % 2 === 0) {
        this.setState({ result: "Even" });
      } else {
        this.setState({ result: "Odd" });
      }
    } else {
      this.setState({ result: "error enter valid format" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a number:</label>
          <br />
          <input
            type="text"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <br />
          <input type="submit"/>
        </form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default NumberChecker;
