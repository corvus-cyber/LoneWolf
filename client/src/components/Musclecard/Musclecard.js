import React, {Component} from "react";
import data from "../../exercises.json";
import { Link } from "react-router-dom";
import Container from "../SelectionContainer/SelectionContainer";
import "./style.css"
import ExerciseCard from "./Exercisecard"
import {
  GiMuscleUp

} from "react-icons/gi";


class Muscles extends Component{
    state={
      exercises: [],
      workoutExercises: []
    }
  
  prepArray=(exercise) => { 
      let storage =[...this.state.workoutExercises, exercise]
      this.setState({workoutExercises: storage})
  }


  render(){
     const Form = () =>{
      console.log(data)
        return data.map(muscles => 
        
        <div className="col-md-4 mr-2 ml-2 mt-2 text-center justify-content-center" key={muscles.nameID}>
            <div className="btn-group-toggle" data-toggle="buttons">
              <button key={muscles.nameID} type="button" style={{}} onClick={() => {displayMusclesandExercises(muscles.name)}} 
              className="btn-muscleBttns btn-lg btn-block"><h5>{muscles.name}</h5></button>
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
      
    <div className="mt-5 pt-4 pb-4 justify-content-center">
      <div className="row justify-content-center">
        <img className="img-fluid" id="muscleImage" style={{maxWidth: "55" + "%"}} src={process.env.PUBLIC_URL + "/assets/muscleGroups/None.png"}  alt="muscle groups"></img>
      </div>
      <div className="row justify-content-center">
        <Form/>
      </div>
      <div className="row justify-content-center">
          {this.state.exercises.map(exercise=> (             
                      <ExerciseCard
                          key = {exercise.exerciseID}
                          exercise= {exercise}
                          exerciseArray= {this.prepArray}   
                      />
                    
            ))}
      </div>
      <div className="row justify-content-center mt-5">
        <li className="nav-item nav-link text-center">
            <Link
                to= {{pathname: "/workouts",
                state: {workoutExercises: this.state.workoutExercises }}}>
                    <button type="submit" className="btn btn-routeToWorkout btn-lg btn-block" disabled={this.state.workoutExercises.length<1} style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}><GiMuscleUp/> Build Workout<GiMuscleUp/></button>
            </Link>
        </li>
      </div>
    </div>
    </Container>


  );
  }
}

export default Muscles;