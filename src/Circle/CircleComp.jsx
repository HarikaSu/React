import React, { useState } from "react";

const RandomCircles = () => {
  const [circles, setCircles] = useState([]);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    // Generate a random size for the new circle
    const size = Math.floor(Math.random() * 181) + 20; // Size between 20px and 200px
    const radius = size / 2;

    // Calculate the position to center the circle at the click point
    const top = clientY - radius;
    const left = clientX - radius;

    const newCircle = {
      id: Math.random().toString(),
      size,
      radius,
      centerX: clientX,
      centerY: clientY,
      top,
      left,
    };

    // Check for intersection with existing circles
    const intersects = circles.some((circle) => {
      const dx = circle.centerX - newCircle.centerX;
      const dy = circle.centerY - newCircle.centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < circle.radius + newCircle.radius;
    });

    if (intersects) {
      // If intersected, change the background to violet briefly and reset to white
      setBgColor("violet");
      setTimeout(() => setBgColor("white"), 500); // Reset to white after 500ms
    }

    // Add the new circle regardless of intersection
    if (circles.length === 2) {
      // Reset the state after the third click
      setCircles([newCircle]);
    } else {
      setCircles([...circles, newCircle]);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
      }}
      onClick={handleClick}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: "blue",
            borderRadius: "50%",
            position: "absolute",
            top: `${circle.top}px`,
            left: `${circle.left}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomCircles;
