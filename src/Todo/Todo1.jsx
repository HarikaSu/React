// import React, { Component } from "react";
// class Todo1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todo: "",
//       list: [],
//       inputValues: "",
//     };
//   }
//   handleChange = (event) => {
//     this.setState({ todo: event.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState((a) => {
//       return { list: [...a.list, a.todo], todo: "" };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="todo"
//             id="todo"
//             value={this.state.todo}
//             onChange={this.handleChange}
//           />
//           <input type="submit" />
//         </form >
//         <ul>
//             {this.state.list.map((a, b)=>{
//                  console.log();
//                  return(
//                     <li key={b}>
//                         {a}
//                         <button>edit</button>
//                         <button onClick={this.handleDelete}>delete</button>
//                     </li>
//                  );
//             })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default Todo1;


import React, { Component } from "react";

class Todo1 extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: [],
    };
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.trim()) {
      this.setState((prevState) => {
        return { list: [...prevState.list, prevState.todo], todo: "" };
      });
    }
  };

  handleDelete = (b) => {
    this.setState((prevState) => {
      const updatedList = prevState.list.filter((_, i) => i !== b);
      return { list: updatedList };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.list.map((a, b) => {
            return (
              <li key={b}>
                {a}
                <button>Edit</button>
                <button onClick={() => this.handleDelete(b)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo1;
