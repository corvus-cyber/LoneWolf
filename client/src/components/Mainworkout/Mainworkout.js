import React, {useState, useEffect} from 'react'

// import {useLocation} from "react-router-dom";
import "./style.css"

import { Collapse, CardBody} from 'reactstrap';
import {BsFillInfoCircleFill} from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useAuth0 } from '@auth0/auth0-react';
import API from ".././../utils/API";


export default function MainWorkout(props) {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    useEffect(()=>{console.log("hello", modal)},[modal])

    const {user} = useAuth0();

    //object model for workout submission
    const [formObject, setFormObject] = useState({
        token: "",
        date: null,
        sets: null,
        reps: null,
        time: null,
        muscleGroup: ""
      })

    // const location = useLocation();
    const toggle = () => setIsOpen(!isOpen);
    if (!props.exercise){
        return <div>Empty</div>
    } 

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit() {
        if (formObject.sets || formObject.reps || formObject.time) {
          API.saveRepsAndTime({
            token: user.sub,
            date: new Date().toISOString().substring(0,10),
            sets: parseInt(formObject.sets),
            reps: parseInt(formObject.reps),
            totalReps: parseInt(formObject.sets * formObject.reps),
            time: parseInt(formObject.time),
            totalTime: parseInt(formObject.time * formObject.sets),
            muscleGroup: props.exercise.muscle
          })
            .then(() => {
                setFormObject({
              sets: "",
              reps: "",
              time: ""
            })})
            .catch(err => console.log(err));
        }
    };

    const toggleModal=(e, gif)=>{
        e.preventDefault();
        setModal(!modal);
    }


    

    return(
        <div className={open ? "open" : null}> 
            <div className="row exercise mb-2 pb-2 pt-2" id={"yellow"} key={props.exercise.exerciseID}>
                <div className="col-md-6 text-center justify-content-center">
                    <img src={"https://corvus-cyber.github.io/LoneWolf/client/public" + props.exercise.gif} onClick={(e)=>toggleModal(e, props.exercise.gif)} className="customFluid mt-1 mb-1" alt="gif of exercise"/>
                        {modal ? (<Modal toggleModal={toggleModal}><img src={"https://corvus-cyber.github.io/LoneWolf/client/public" + props.exercise.gif} className="img-fluid  pt-5 mt-5 mb-5 pb-5" alt="gif of exercise"/></Modal>):(<></>)}
                </div> 
                <div className="col-md-2 mt-5 text-center"><h5>{props.exercise.exercise}</h5></div>

                    <div className="justify-content-center text-center pt-2 pl-5 ml-5">
                        <form className="form">
                            <div className="form-group">
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " sets"}  placeholder="Enter sets" name="sets" value={formObject.sets} required/>
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " reps"}  placeholder="Enter reps" name="reps"value={formObject.reps}/>
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " time"} placeholder="Enter time (secs)"name="time"value={formObject.time}/>
                            </div>
                            <button type="button" className="mr-1 complete" onClick={() => {setOpen(!open); handleFormSubmit()}}>Complete</button>
                        </form>    
                    </div>
                    <button type="button" className="mr-3 ml-3 mt-2 btn-information"  onClick={toggle}><BsFillInfoCircleFill/></button>
                    <Collapse className="pr-2 pl-2 text-center" isOpen={isOpen}>
                        <CardBody>
                            {props.exercise.description}
                        </CardBody>
                    </Collapse>              
            </div> 
        </div>   
    )
}