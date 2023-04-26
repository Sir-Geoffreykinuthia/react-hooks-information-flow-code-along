import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

// function Child({ onChangeColor }) {
//   // loging the onChangeColor function passed as a prop
//   // console.log(onChangeColor);


function Child({onChangeColor, color}) {
  // defing a function to handle click event and invoke onChangeColor callback function with new random color
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);

  }
  return(
    // rendering child component with onClick event listener that calls handleClick function 
    <div 
    onClick={handleClick}
    className="child"
    sytle={{backgroundColor: color}}
    />
  );
 

  // // adding an event listener to div that calls the onChangeColor function
  //  <div 
  //  onClick={onChangeColor}
  //  className="child" 
  //  style={{ backgroundColor: "#FFF" }} 
  //  />
    // );
  }    

export default Child;
