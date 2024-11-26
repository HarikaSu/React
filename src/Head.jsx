import { Component } from "react";

const obj = {
  productName: "ertyui",
  productPrice: "345",
  ProductAvailability: false, // Change this to false to test
};

class Head extends Component {
  getTextStyle() {
    // Logic to determine color
    return {
      color: obj.ProductAvailability ? "red" : "blue", // Red if true, blue if false
    };
  }

  render() {
    return (
      <>
        <h1 style={this.getTextStyle()}>
          {obj.productName} - ${obj.productPrice}
        </h1>
        <p>{obj.ProductAvailability ? "Available" : "Out of Stock"}</p>
      </>
    );
  }
}

export default Head;

