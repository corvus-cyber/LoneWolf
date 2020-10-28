import React, {useState} from 'react'

// import {useLocation} from "react-router-dom";
import "./style.css"

import { Collapse, Button, CardBody} from 'reactstrap';
import {
    BsFillInfoCircleFill,
    
  } from "react-icons/bs";


export default function MainWorkout(props) {
    const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    // const location = useLocation();
    const toggle = () => setIsOpen(!isOpen);
    // console.log(location)
    if (!props.exercise){
        return <div>Empty</div>
    } 

    function handleInputChange(event) {

    };

    const handleFormSubmit=()=>{
        console.log("hello");
    };


    

    return(
        <div className={open ? "open" : null}> 
            <div className="row exercise mb-2" id={"yellow"} key={props.exercise.exerciseID}>
                {console.log(props.exercise)}
                <div className="col-md-6 text-center justify-content-center">
                    <img src={process.env.PUBLIC_URL + props.exercise.gif} className="img-fluid" alt="gif of exercise"/>
                </div> 
                <div className="col-md-2 mt-5 text-center"><h6>{props.exercise.exercise}</h6></div>

                    <div className="justify-content-center text-center pt-2 pl-5">
                        <form className="form">
                            <div className="form-group">
                                <input type="number" className="form-control" id={props.exercise.muscle + " sets"}  placeholder="Enter sets" required/>
                                <input type="number" className="form-control" id={props.exercise.muscle +" reps"}  placeholder="Enter reps"/>
                                <input type="number" className="form-control" id={props.exercise.muscle +"time"} placeholder="Enter time (secs)"/>
                            </div>
                            <Button className="mr-1" onClick={() => {setOpen(!open); handleFormSubmit()}} style={{backgroundColor:"#F4C430", color: "black",  marginBottom: '1rem' }}>Complete</Button>
                        </form>    
                    </div>
                    <Button className="mr-2 ml-2 mt-2"  onClick={toggle} style={{ backgroundColor: "#367e3b",marginBottom: '1rem' }}><BsFillInfoCircleFill/></Button>
                    <Collapse className="pr-2 pl-2 text-center" isOpen={isOpen}>
                        <CardBody>
                            {props.exercise.description}
                        </CardBody>
                    </Collapse>              
            </div> 
        </div>   
    )
}