import React, { Component } from "react";
import muscles from "../../exercises.json";
import Form from "./Form"

class Muscles extends Component{
  state= {
    muscles
  }
render(){

  
  return(
    <div>
    <img id="muscleImage" src="logo.svg" alt="muscle groups"></img>
      <div className="row">
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


  );
}
}

export default Muscles;