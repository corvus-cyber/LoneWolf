import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import MainWorkout from "../components/Mainworkout/Mainworkout"
import {useLocation, Link} from "react-router-dom";
import {
  GiMuscleUp

} from "react-icons/gi";

function Workout() {
  const location = useLocation();
  if(!location.state || location.state.workoutExercises==[]){
    return (
      <div>
        <Navbar /> 
        <Wrapper>
          <div className="row justify-content-md-center">
            <div className="col-md-12 text-center mt-5 mb-5">
              <h3>A Lone Wolf cannot hope to survive without fitness. Return to the Build Workout page to choose your exercises.</h3>
            </div>
            <div className="col-md-6 text-center mt-5">
              <li className="nav-item nav-link text-center">
                <Link
                    to="/build" className={window.location.pathname === "/build" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        <button type="submit" className="btn-return btn-lg btn-block" ><GiMuscleUp/> Build Workout <GiMuscleUp/></button>
                </Link>
              </li>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </div>
    )
  }
  
  const workoutExercises = location.state.workoutExercises || []; 
  console.log(workoutExercises)
    return (
      <div>
        <Navbar /> 
        <Wrapper>
        {workoutExercises.map(exercise=>( 
          <MainWorkout
            key = {exercise.exerciseID}
            exercise= {exercise} 
          />
        ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
  
  export default Workout;