import React from "react";
import "./style.css";

function Container(props) {
  return <main className="selection-container container">{props.children}</main>;
}

export default Container;