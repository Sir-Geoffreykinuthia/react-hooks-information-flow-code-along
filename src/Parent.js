import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  // here we are setting initial state for the paret component
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");


  // defining a function to handle click event and update state for parent component and both child components
  function handleChangeColor(newChildColor){
    const newRandomColor=getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  
  
  // function to change the background color of the parent component
  // // function handleChangeColor(){
  //   const newRandomColor = getRandomColor();
  //   setColor(newRandomColor);
  }
  return (
    // rendering parent component with two child components as children
    <div className="parent" style={{ backgroundColor: color }}>
      {/* rendering two child components and passing the handleChangeColor function as a prop */}
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
