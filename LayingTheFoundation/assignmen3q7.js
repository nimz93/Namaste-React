/*
  *
   Assignment 3 : Question 7
   Create a Header from scratch
*/
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <img src="https://static.wixstatic.com/media/61c9e6_3eff204dd26643af9eafa907535d9495~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/61c9e6_3eff204dd26643af9eafa907535d9495~mv2.jpeg" alt ="logo" height ="100px" width = "100px"/>
);

const Header = () => (
    <div className="header">
        {<Title />}
        <div className="search-box">
          <input type ="text" placeholder="Search..."/>
        </div>
        <div className="user-icon">
            <a href="/"><i className="fa fa-user fa-lg"></i></a>
        </div>
    </div>
);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);