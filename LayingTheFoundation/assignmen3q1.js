/*
  *
   Assignment 3 : Question 1
   Create a Nested header element using React.createElement(h1, h2, h3 inside a div with class title)
*/
import React from "react";
import ReactDOM from "react-dom/client";

let header = React.createElement('div',{ class : "title"},
        [
            React.createElement("h1",{},'Title 1'),
            React.createElement("h2",{},'Title 2'),
            React.createElement("h3",{},'Title 3')
        ]    
    );
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);