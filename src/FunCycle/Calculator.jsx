import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [isOn, setIsOn] = useState(true); // Track if the calculator is on

  const handleClick = (value) => {
    if (!isOn) return; // Do nothing if the calculator is off

    if (value === "C") {
      setDisplay(""); // Clear display
    } else if (value === "=") {
      try {
        setDisplay(evaluate(display).toString()); // Safely evaluate expression
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "ON/OFF") {
      setIsOn(!isOn); // Toggle on/off state
      setDisplay(""); // Optionally clear display when turned off
    } else {
      setDisplay(display + value); // Append clicked value
    }
  };

  return (
    <div style={styles.calculator}>
      <h1 style={{color:"white"}}>Calculator</h1>
      <div style={styles.screen}> 
        <span style={styles.screenText}>{display || "0"}</span>
      </div>
      <div style={styles.buttons}>
        {["(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+", "ON/OFF"].map(
          (item) => (
            <Button
              key={item}
              onClick={() => handleClick(item)}
              name={item}
              style={styles.button}
            />
          )
        )}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "blue",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
  },
  screen: {
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: "grey",
    borderRadius: "10px",
    textAlign: "right",
    overflow: "hidden",
    height: "60px",
    opacity:"0.9"
  },
  screenText: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "60px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "20px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "violet",
    color: "black",
    cursor: "pointer",
    boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
    transition: "transform 0.1s, background-color 0.3s",
  },
};

export default Calculator;