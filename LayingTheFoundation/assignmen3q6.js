/*
  *
   Assignment 3 : Question 6
*/
import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
    <h1>Heading 1</h1>
)

const Header = () => (
    <div className="title">
         {TitleComponent()}
        {<TitleComponent />}
        {<TitleComponent></TitleComponent>}
        <h2>Heading 2</h2>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);