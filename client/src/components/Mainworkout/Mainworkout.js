import React, {useState} from 'react'

// import {useLocation} from "react-router-dom";
import "./style.css"
import Container from "../SelectionContainer/SelectionContainer";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {
    BsFillInfoCircleFill,
    
  } from "react-icons/bs";


export default function MainWorkout(props) {
    const [isOpen, setIsOpen] = useState(false);
    // const location = useLocation();
    const toggle = () => setIsOpen(!isOpen);
    // console.log(location)
    if (!props.exercise){
        return <div>Empty</div>
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
                                    <Button className="mr-1" color="primary" style={{ marginBottom: '1rem' }}>Add To Workout</Button>
                                </form>    
                            
                            <Button className="ml-1" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}><BsFillInfoCircleFill/></Button>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                <CardBody>
                                {props.exercise.description}
                                </CardBody>
                                </Card>
                            </Collapse>
                            </div>
                    </div> 
                </div> 
            </div>
    )
}