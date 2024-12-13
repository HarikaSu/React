import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { log } from 'mathjs';

export default function UseEfect() {
    const[value,setValue]=useState(1);
    const[message,setMessage]=useState("hi")
    const[cart,setCart]=useState(0)
    const handleMessage=()=>{
        setMessage(message+"10k")

    }
    // const handleDisplay=()=>{
    //     setDisplay(display+"1")

    // }
    // useEffect(()=>{setValue(value+1)},[message,display])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
        setCart(res.data[0].title);

        });
    },[cart])
    
  return (
    <div>
      <h1>value:{value}</h1>
      <p>message:{message}</p>
      <p>Cart:{cart}</p>
      <button onClick={handleMessage}>clickme</button>
      <button>add to cart</button>
    </div>
  );
}
