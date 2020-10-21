import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper container justify-content-center mt-5 ml-5">{props.children}</main>;
}

export default Wrapper;
