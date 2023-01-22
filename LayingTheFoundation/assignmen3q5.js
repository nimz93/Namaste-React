/*
  *
   Assignment 3 : Question 5
   Composition of Component
*/
import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => (
    <h1>Title 1</h1>
)

const Header = () => (
    <div className="title">
        {<Heading1 />}
        <h2>Title 2</h2>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);