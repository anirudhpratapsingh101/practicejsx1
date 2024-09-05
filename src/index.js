//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

const name = "akshay";
const year = "2024";

ReactDom.render(
  <div>
    <h1>Hello{name}</h1>
    <h2>Copyright{year}</h2>
  </div>,
  document.getElementById("root")
);
