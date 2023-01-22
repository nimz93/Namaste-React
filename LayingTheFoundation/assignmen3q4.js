/*
  *
   Assignment 3 : Question 4
   Pass Attributes into the tag in JSX
*/
import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1>Heading 1</h1>
)

const Header = () => (
    <div className="title">
        {heading}
        <h2>Heading 2</h2>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);