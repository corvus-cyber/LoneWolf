import React, {Component} from "react";
import data from "../../exercises.json";
import { Link } from "react-router-dom";
import Container from "../SelectionContainer/SelectionContainer";
import "./style.css"
import $ from 'jquery';
import ExerciseCard from "./Exercisecard"

class Muscles extends Component{
    state={
      exercises: [],
    }
    // componentDidMount(){
    //   $('.list-group-item').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).addClass('active').siblings().removeClass('active');
    //   });
  
    //   $('.show-btn').on('click', function () {
    //     console.log("hello")
    //     $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    //   });
  
    //   $('.card-reveal .close').on('click', function () {
    //     $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    //   });
    // }
  render(){
     const Form = () =>{
      console.log(data)
        return data.map(muscles => 
        
        <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
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
      console.log("appropriate muscle", muscle)
      document.getElementById("muscleImage").src=process.env.PUBLIC_URL +muscle.image;
      this.setState({exercises: muscle.exercises})
    }
    // const DisplayExercises = (name) =>{
    //   console.log(name)
    //   console.log(data)
    //   let muscle = data.filter(muscle => { return name === muscle.name})[0]
    //   console.log("appropriate muscle", muscle)
    //   this.setState({exercises: muscle.exercises})
    //   // muscle.exercises.map((exercises)=>{
        
    //   //   console.log("digging ", exercises)
    //   //     return(
    //   //       <div className="mr-2 ml-2">
    //   //       <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
    //   //         <div className="card" style={{width: 18 + "rem"}} key={exercises.exerciseID}>
    //   //             <img src={process.env.PUBLIC_URL + exercises.gif} className="card-img-top" alt="portfolio screenshot"/>
    //   //                 <div className="card-head">
    //   //                   <h5>{exercises.exercise}</h5>
    //   //                 <button type="button" className="btn btn-custom show-btn " data-rel={exercises.exerciseID}>
    //   //                     <BsFillInfoCircleFill/>
    //   //                 </button>
    //   //                 </div>
    //   //                 <div className="card-reveal" data-rel={exercises.exercise} style={{display: "none"}}>
    //   //                 <button type="button" className="close" data-rel={exercises.exercise} data-dismiss="modal" aria-label="Close">
    //   //                   <span aria-hidden="true">×</span></button>
    //   //                 <p>{exercises.description}</p>
    //   //               </div>
    //   //         </div> 
    //   //       </div> 
    //   //     </div>
    //   //     )
    //   //   })
    //   }
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