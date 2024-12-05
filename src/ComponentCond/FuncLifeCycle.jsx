import React, { useState } from "react";
function FuncLifeCycle() {
  const [text, setText] = useState(2);
  const handleEvent=()=>{
    setText(text+1)
  }
  const handleEvent1=()=>{
    setText(text-1)
  }
  const handleEvent2=()=>{
    setText(text+2)
  }
  const handleEvent3=()=>{
    setText(text-2)
  }
  return (
    <div>
      <button onClick={handleEvent}>+1</button>
      <button onClick={handleEvent1}>-1</button>
      <h1>{text}</h1>
      <button onClick={handleEvent2}>+2</button>
      <button onClick={handleEvent3}>-2</button>
    </div>
  );
}
export default FuncLifeCycle;
