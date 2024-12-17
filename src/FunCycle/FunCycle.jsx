import React, { useState } from "react";
import Button from "../FunCycle/Button";

function Count() {
  const [Counter, setCounter] = useState(0);

  const counterHandling = (action) => {
    switch (action) {
      case "increment":
        setCounter(Counter + 1);
        break;
      case "decrement":
        setCounter(Counter - 1);
        break;
      case "reset":
        setCounter(0);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>{Counter}</h1>
      <div>
        <Button onClick={() => counterHandling("increment")} name="Increment" />
        <Button onClick={() => counterHandling("decrement")} name="Decrement" />
        <Button onClick={() => counterHandling("reset")} name="Reset" />
      </div>
    </div>
  );
}

export default Count;





