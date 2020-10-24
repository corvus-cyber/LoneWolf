import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import MainWorkout from "../components/Mainworkout/Mainworkout"
import {useLocation} from "react-router-dom";

function Workout() {
  const location = useLocation();
  if(!location.state){
    return (
      <div>
        <Navbar /> 
        <Wrapper>
          <p>You need to add exercises</p>
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