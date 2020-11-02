import React from "react";
import "./style.css";

function Container(props) {
  return <main className="stats-container container">{props.children}</main>;
}

export default Container;