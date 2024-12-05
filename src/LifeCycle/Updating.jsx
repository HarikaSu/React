// import React, { Component } from "react";
// import axios from "axios";
// import ProfileCard from "../Menu/ProfileCard";
// import Loader from "./Spinner";

// class Updating extends Component {
//     constructor() {
//         super();
//         this.state = { count: 1, product: null };
//     }
//     componentDidUpdate(prvsProps, prvsState) {
//         if (prvsState.count !== this.state.count) {
//             console.log(`count value updated to ${this.state.count}`);
//             axios
//                 .get(`https://fakestoreapi.com/products/${this.state.count}`)
//                 .then((res) => {
//                     this.setState({ product: res.data });
//                 });
                
//         }
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         if (this.state.count >= 10) {
//             return false;
//         } else {
//             return true;
//         }
//     }

//     getSnapshotBeforeUpdate(prvsProps, prvsState) {
//         console.log(prvsState, "snapshot");
//         return null;
//     }

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     decrement = () => {
//         this.setState({ count: this.state.count - 1 });
//     };

//     render() {
//         const { count, product } = this.state;
//         return (
//             <div>
//                 <div>
//                     <h1>{count}</h1>
//                     <button onClick={this.increment}>Next</button>
//                     <button onClick={this.decrement} disabled={count <= 1}>
//                         Previous
//                     </button>
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                     {!product ? (
//                         <Loader />
//                     ) : (
//                         <ProfileCard
//                             img={product.image}
//                             title={product.title}
//                             desc={product.description}
//                             info={product.category}
//                         />
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Updating;


import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../Menu/ProfileCard";
import Loader from "./Spinner";

class Updating extends Component {
    constructor() {
        super();
        this.state = { count: 1, product: null };
    }

    componentDidMount() {
        this.fetchProduct(this.state.count);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.fetchProduct(this.state.count);
        }
    }

    fetchProduct = (id) => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                this.setState({ product: res.data });
            });
    };

    handleButtonClick = (id) => {
        this.setState({ count: id });
    };

    render() {
        const { count, product } = this.state;

        return (
            <div>
                <div>
                    <h1>Product {count}</h1>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <button
                                key={num}
                                onClick={() => this.handleButtonClick(num)}
                                style={{
                                    padding: "10px",
                                    backgroundColor: count === num ? "#007BFF" : "#f0f0f0",
                                    color: count === num ? "#fff" : "#000",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    {!product ? (
                        <Loader />
                    ) : (
                        <ProfileCard
                            img={product.image}
                            title={product.title}
                            desc={product.description}
                            info={product.category}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Updating;
