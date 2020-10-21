import React, {useState} from "react";
import data from "../../exercises.json";
import { Link } from "react-router-dom";
import Container from "../SelectionContainer/SelectionContainer";
import "./style.css"
import {
  BsFillInfoCircleFill
} from "react-icons/bs";

const  Muscles = ()=>{
    const  
    
    const Form = () =>{
      console.log(data)
       return data.map(muscles => 
       
        <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
            <div className="btn-group-toggle" data-toggle="buttons">
              <button key={muscles.nameID} type="button" onClick={() => {DisplayExercises(muscles.name)}} 
              className="btn btn-primary btn-lg btn-block">{muscles.name}</button>
          </div>
        </div>  
      )

    }
  const DisplayExercises = (name) =>{
    console.log(name)
    console.log(data)
    let muscle = data.filter(muscle => { return name === muscle.name})[0]
    console.log("appropriate muscle", muscle)
    muscle.exercises.map((exercises)=>{
      console.log("digging ", exercises)
        return(
          <div className="mr-2 ml-2">
          <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
            <div className="card" style={{width: 18 + "rem"}} key={exercises.exerciseID}>
                <img src={process.env.PUBLIC_URL + exercises.gif} className="card-img-top" alt="portfolio screenshot"/>
                    <div className="card-head">
                      <h5>{exercises.exercise}</h5>
                    <button type="button" className="btn btn-custom show-btn " data-rel={exercises.exerciseID}>
                        <BsFillInfoCircleFill/>
                    </button>
                    </div>
                    <div className="card-reveal" data-rel={exercises.exercise} style={{display: "none"}}>
                    <button type="button" className="close" data-rel={exercises.exercise} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span></button>
                    <p>{exercises.description}</p>
                  </div>
            </div> 
          </div> 
        </div>
        )
      })
    }
  function changeImg() {
    return data.filter()
      document.getElementById("muscleImage").src = process.env.PUBLIC_URL + "muscles.image"
   }
  
   
   
  return(
    <Container>
    <div className="mt-5 pt-4 pb-4">
      <div className="row justify-content-center">
        <img id="muscleImage" src="logo.svg" alt="muscle groups"></img>
      </div>
      <div className="row justify-content-center">
        <Form/>
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

export default Muscles;