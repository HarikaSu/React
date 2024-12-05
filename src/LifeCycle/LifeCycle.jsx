import React, { Component } from "react";
import ProfileCard from "../Menu/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";

class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructing");

    this.state = {
      products: [],
      isLoading: true, // State to track loading status
    };
  }

  componentDidMount() {
    console.log("mounting");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json, isLoading: false }); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        this.setState({ isLoading: false }); // Stop loading even if there’s an error
      });
  }

  static getDerivedStateFromProps() {
    console.log("state delivering");
    return null; // No changes to state based on props
  }

  render() {
    console.log("rendering");

    const { products, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          // Bootstrap spinner while loading
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">buffering</span>
            </div>
          </div>
        ) : (
          // Display cards after data is loaded
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              padding: "20px",
            }}
          >
            {products.map((product, index) => (
              <ProfileCard
                key={index}
                img={product.image}
                title={product.title}
                desc={product.description}
                info={product.category}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default LifeCycle;
