import React from "react";
import ReactDOM from "react-dom/client";
 
const a= React.createElement(
    "div",
     {
        id : "title"
     },
      "Heading1");
      const b= React.createElement(
    "h1",
     {
        id : "title1"
     },
      "Heading2");
     const c=React.createElement(
        "button",
        {
            className: "clk"
        },
        "Click Me!"
     );
     const d=React.createElement(
        "div",
        {
            id: "cls",
        },
        [b,c]
      );
      const all=React.createElement(
        "div",
        {
            id: "container",
            className: "abc"
        },
        [d]
      );
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(all);