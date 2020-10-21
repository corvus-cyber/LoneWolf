import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../../exercises.json"
import Form from "./Form"
import Container from "../SelectionContainer/SelectionContainer"

class Exercises extends Component{
  // state= {
  //   muscles: []
  // }

  // componentDidMount(result){
  //     this.setState({
  //       muscles: result.data
  //     })
  // }
render(){
  console.log(data)
  // const {muscles} = this.state;
  return(
    <Container>
    <div className="mt-5 pt-4 pb-4">
      <div className="row justify-content-center">
        <img id="muscleImage" src="logo.svg" alt="muscle groups"></img>
      </div>
      <div className="row justify-content-center">
        {data.map(muscle=>(
          <Form
            key = {muscle.exercises.exerciseID}
            gif = {muscle.exercises.gif}
            id = {muscle.exercises.exerciseID}
            name= {muscle.exercises.exercise}
            description= {muscle.exercises.description}
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

export default Exercises;