/*
  *
   Assignment 3 : Question 1
   Create a Nested header element using jsx(h1, h2, h3 inside a div with class title)
*/
import React from "react";
import ReactDOM from "react-dom/client";

let header2 = (
    <div className="title">
        <h1>Title 321</h1>
        <h2>Title 322</h2>
        <h3>Title 323</h3>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header2);