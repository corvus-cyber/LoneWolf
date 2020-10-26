import React, {useState} from 'react'
import "./style.css"
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import {
  BsFillInfoCircleFill
} from "react-icons/bs";


export default function Exercisecard(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    
    const toggle = () => setIsOpen(!isOpen);

    function handleOnClick(){
        console.log(props.exercise);
        props.exerciseArray(props.exercise);
    }

return(
    <div className="mr-2 ml-2">
        {console.log(props.exercise)}
                <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
                    <div className="card" style={{width: 18 + "rem"}} key={props.exercise.exerciseID}>
                        <img src={process.env.PUBLIC_URL + props.exercise.gif} className="card-img-top" alt="gif of exercise"/>
                            <div className="card-head">
                            <h5>{props.exercise.exercise}</h5>
                            </div>
                            <div className="justify-content-center text-center">
                                <form className="form">
                                    <div className="form-group">
                                        <input type="hidden" name="weight" value={props.exercise} className="form-control" id="weight" placeholder="Weight" />
                                    </div>
                                    <Button className="mr-1" color="primary" onClick={handleOnClick} style={{ marginBottom: '1rem' }}>Add To Workout</Button>
                                </form>    
                            
                            <Button className="ml-1" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}><BsFillInfoCircleFill/></Button>
                            <Collapse isOpen={isOpen}>
                                <CardBody>
                                {props.exercise.description}
                                </CardBody>
                            </Collapse>
                            </div>
                    </div> 
                </div> 
            </div>
    )
}