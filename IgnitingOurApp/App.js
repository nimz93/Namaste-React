import React from "react";
import ReactDOM from "react-dom/client";

let ul = React.createElement('ul',{},
            React.createElement("li",{},'Initialize Npm'),
            React.createElement("li",{},'Remove CDN'),
            React.createElement("li",{},'Install React & React DOM Packages'),
            React.createElement("li",{},'Parcel'),
            React.createElement("li",{},'Use Browser List')
        )
let elm = React.createElement('h1',{className : 'title'}, 'Ignite Our App',ul);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elm);