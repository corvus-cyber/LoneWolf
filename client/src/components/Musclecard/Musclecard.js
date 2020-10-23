import React, {Component} from "react";
import data from "../../exercises.json";
import { Link } from "react-router-dom";
import Container from "../SelectionContainer/SelectionContainer";
import "./style.css"
import ExerciseCard from "./Exercisecard"

class Muscles extends Component{
    state={
      exercises: [],
    }

  render(){
     const Form = () =>{
      console.log(data)
        return data.map(muscles => 
        
        <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center" key={muscles.nameID}>
            <div className="btn-group-toggle" data-toggle="buttons">
              <button key={muscles.nameID} type="button" style={{backgroundColor: "#367e3b", borderColor: "#367e3b"}} onClick={() => {displayMusclesandExercises(muscles.name)}} 
              className="btn btn-primary btn-lg btn-block">{muscles.name}</button>
          </div>
        </div>  
      )
    }

    const displayMusclesandExercises = (name) =>{
      console.log(name)
      let muscle = data.filter(muscle => { return name === muscle.name})[0]
      console.log("appropriate muscle", muscle.exercises)
      document.getElementById("muscleImage").src=process.env.PUBLIC_URL +muscle.image;
      this.setState({exercises: muscle.exercises})
    }

  return(
    <Container>
      
    <div className="mt-5 pt-4 pb-4">
      <div className="row justify-content-center">
        <img className="img-fluid" id="muscleImage" src={process.env.PUBLIC_URL + "/assets/muscleGroups/None.png"}  alt="muscle groups"></img>
      </div>
      <div className="row justify-content-center">
        <Form/>
      </div>
      <div className="row justify-content-center">
          {this.state.exercises.map(exercises=> (             
                      <ExerciseCard
                          key = {exercises.exerciseID}
                          gif = {exercises.gif}
                          exerciseID = {exercises.exerciseID}
                          exercise= {exercises.exercise}
                          description = {exercises.description}       
                      />
                    
            ))}
      </div>
      <div className="row justify-content-center">
        <li className="nav-item nav-link text-center">
            <Link
                to="/exercises" className={window.location.pathname === "/exercises" || window.location.pathname === "/workouts" ? "nav-link active" : "exercises"}>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}>Build Workout</button>
            </Link>
        </li>
      </div>
    </div>
    </Container>


  );
  }
}

export default Muscles;