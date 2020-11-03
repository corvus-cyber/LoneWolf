import React, {useState, useEffect} from 'react'

// import {useLocation} from "react-router-dom";
import "./style.css"

import { Collapse, Button, CardBody} from 'reactstrap';
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
    // console.log(location)
    if (!props.exercise){
        return <div>Empty</div>
    } 

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value)
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit() {
        if (formObject.sets || formObject.reps || formObject.time) {
          API.saveRepsAndTime({
            token: user.sub,
            date: new Date().toISOString().substring(0,10),
            sets: parseInt(formObject.sets),
            reps: parseInt(formObject.sets * formObject.reps),
            time: parseInt(formObject.time * formObject.sets),
            muscleGroup: props.exercise.muscle
          })
            .then(() => {
                console.log(formObject)
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
        console.log(e.target)
        // console.log(gif)
        setModal(!modal);
    }


    

    return(
        <div className={open ? "open" : null}> 
            <div className="row exercise mb-2" id={"yellow"} key={props.exercise.exerciseID}>
                {/* {console.log(props.exercise)} */}
                <div className="col-md-6 text-center justify-content-center">
                    <img src={process.env.PUBLIC_URL + props.exercise.gif} onClick={(e)=>toggleModal(e, props.exercise.gif)} className="customFluid mt-1 mb-1" alt="gif of exercise"/>
                        {modal ? (<Modal toggleModal={toggleModal}><img src={process.env.PUBLIC_URL + props.exercise.gif} className="img-fluid  pt-5 mt-5 mb-5 pb-5" alt="gif of exercise"/></Modal>):(<></>)}
                </div> 
                <div className="col-md-2 mt-5 text-center"><h5>{props.exercise.exercise}</h5></div>

                    <div className="justify-content-center text-center pt-2 pl-5">
                        <form className="form">
                            <div className="form-group">
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " sets"}  placeholder="Enter sets" name="sets" value={formObject.sets} required/>
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " reps"}  placeholder="Enter reps" name="reps"value={formObject.reps}/>
                                <input onChange={handleInputChange} type="number" className="form-control" id={props.exercise.muscle + " time"} placeholder="Enter time (secs)"name="time"value={formObject.time}/>
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