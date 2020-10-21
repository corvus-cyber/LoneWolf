import React from "react";
import data from "../../exercises.json";
import { Link } from "react-router-dom";
import Container from "../SelectionContainer/SelectionContainer"

const  Muscles = ()=>{
  
    
    const Form = () =>{
      console.log(data)
       return data.map(test => 
       
        <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
            <div className="btn-group-toggle" data-toggle="buttons">
              <button key={test.nameID} type="button" onClick={changeImg} className="btn btn-primary btn-lg btn-block">{test.name}</button>
          </div>
        </div>
          
        )

    }
  function changeImg() {
    
      document.getElementById("muscleImage").src = process.env.PUBLIC_URL + test.image
   }
  
   
   
  return(
    <Container>
    <div className="mt-5 pt-4 pb-4">
      <div className="row justify-content-center">
        <img id="muscleImage" src="logo.svg" alt="muscle groups"></img>
      </div>
        <div className="row justify-content-center">
       
     <Form/>

        {/* {data.map(muscles=>(
          <Form
            key = {muscles.nameID}
            image = {muscles.image}
            id = {muscles.nameID}
            name= {muscles.name}
          />
        ))} */}
      
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