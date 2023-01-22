/*
  *
   Assignment 3 : Question 1
   Create a Nested header element using Recat Functional Component and JSX (h1, h2, h3 inside a div with class title)
*/
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="title">
        <h1>Title 331</h1>
        <h2>Title 332</h2>
        <h3>Title 333</h3>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);