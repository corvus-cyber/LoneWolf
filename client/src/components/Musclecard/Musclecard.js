import React, { Component } from "react";
import muscles from "../../exercises.json";
import { Link } from "react-router-dom";
import Form from "./Form"
import Container from "../SelectionContainer/SelectionContainer"

class Muscles extends Component{
  state= {
    muscles
  }
render(){

  
  return(
    <Container>
    <div className="mt-5 pt-4 pb-4">
      <div className="row justify-content-center">
        <img id="muscleImage" src="logo.svg" alt="muscle groups"></img>
      </div>
      <div className="row justify-content-center">
        {this.state.muscles.map(muscles=>(
          <Form
            key = {muscles.nameID}
            image = {muscles.image}
            id = {muscles.nameID}
            name= {muscles.name}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        <li className="nav-item nav-link">
            <Link
                to="/exercises" className={window.location.pathname === "/exercises" || window.location.pathname === "/workouts" ? "nav-link active" : "exercises"}>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}>Choose Exercises</button>
            </Link>
        </li>
      </div>
    </div>
    </Container>


  );
}
}

export default Muscles;