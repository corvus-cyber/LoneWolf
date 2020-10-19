import React from 'react';


function Form(props){
    function changeImg(){
        document.getElementById("muscleImage").src=process.env.PUBLIC_URL +props.image
    }
    return(
    <div className="btn-group-toggle" data-toggle="buttons">
        <button type="button" onClick={changeImg} class="btn btn-primary btn-lg btn-block">{props.name} </button>
    </div>
    )
}

export default Form;