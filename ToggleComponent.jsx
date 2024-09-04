// src/ToggleComponent.js
import React, { useState } from "react";

function ToggleComponent() {
  // State to track visibility and color
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState("blue");

  // Toggle visibility
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Change color
  const handleChangeColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };

  return (
    <div>
      <button onClick={handleToggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>

      <button onClick={handleChangeColor}>Change Color</button>

      {isVisible && (
        <div style={{ color: color, padding: 20}}>
          Event handlers are your own functions that will be triggered in
          response to interactions like clicking, hovering, focusing form
          inputs, and so on.
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;
