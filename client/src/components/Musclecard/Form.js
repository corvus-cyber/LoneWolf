import React from 'react';


function Form(props){
    function changeImg(){
        document.getElementById("muscleImage").src="https://corvus-cyber.github.io/LoneWolf/client/public" +props.image
    }
    return(
    <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
        <div className="btn-group-toggle" data-toggle="buttons">
            <button type="button" onClick={changeImg} class="btn btn-muscleBttns btn-lg btn-block">{props.name} </button>
        </div>
    </div>
    )
}

export default Form;