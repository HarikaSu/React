import React, { Component } from "react";
import "./Mains.css";
import mobileImage from './assets/mobile.png';
import laptopImage from './assets/Laptop.jpg';
import watchImage from './assets/watch.jpg';
import headphonesImage from './assets/headphones.jpg';
import tabletImage from './assets/tablet.jpg';


const products = [
  {
    productName: "Mobile",
    productPrice: "34500",
    productAvailability: false,
    image: mobileImage,
  },
  {
    productName: "Laptop",
    productPrice: "34500",
    productAvailability: true,
    image: laptopImage ,
  },
  {
    productName: "Watch",
    productPrice: "24500",
    productAvailability: false,
    image: watchImage,
  },
  {
    productName: "Headphones",
    productPrice: "20500",
    productAvailability: true,
    image: headphonesImage,
  },
  {
    productName: "Tablet",
    productPrice: "18500",
    productAvailability: false,
    image: tabletImage,
  },
];

class Mains extends Component {
  render() {
    return (
      <div className="mainbox">
        <div className={products[0].productAvailability ? "available" : "unavailable"}>
          <h1>{products[0].productName}</h1>
          <img src={products[0].image} alt={products[0].productName} className="product-image" />
          <h1>{products[0].productPrice}</h1>
        </div>
        <div className={products[1].productAvailability ? "available" : "unavailable"}>
          <h1>{products[1].productName}</h1>
          <img src={products[1].image} alt={products[1].productName} className="product-image" />
          <h1>{products[1].productPrice}</h1>
        </div>
        <div className={products[2].productAvailability ? "available" : "unavailable"}>
          <h1>{products[2].productName}</h1>
          <img src={products[2].image} alt={products[2].productName} className="product-image" />
          <h1>{products[2].productPrice}</h1>
        </div>
        <div className={products[3].productAvailability ? "available" : "unavailable"}>
          <h1>{products[3].productName}</h1>
          <img src={products[3].image} alt={products[3].productName} className="product-image" />
          <h1>{products[3].productPrice}</h1>
        </div>
        <div className={products[4].productAvailability ? "available" : "unavailable"}>
          <h1>{products[4].productName}</h1>
          <img src={products[4].image} alt={products[4].productName} className="product-image" />
          <h1>{products[4].productPrice}</h1>
        </div>
      </div>
    );
  }
}

export default Mains;