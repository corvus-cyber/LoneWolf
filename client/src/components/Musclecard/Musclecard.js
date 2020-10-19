import React, { Component } from "react";
import muscles from "../../exercises.json";
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
      
    </div>
    </Container>


  );
}
}

export default Muscles;