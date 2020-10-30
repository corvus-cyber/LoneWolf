import React, {useState} from 'react'
import "./style.css"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Modal from "../Modal/Modal";
import {
  BsFillInfoCircleFill
} from "react-icons/bs";


export default function Exercisecard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    function handleOnClick(){
        console.log(props.exercise);
        props.exerciseArray(props.exercise);
    };

    const toggleModal=(e, gif)=>{
        e.preventDefault();
        console.log(e.target)
        // console.log(gif)
        setModal(!modal);
    }

return(
    <div className="mr-2 ml-2">
        {console.log(props.exercise)}
                <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
                    <div className="card" style={{width: 18 + "rem"}} key={props.exercise.exerciseID}>
                        <img src={process.env.PUBLIC_URL + props.exercise.gif} onClick={(e)=>toggleModal(e, props.exercise.gif)} className="card-img-top" alt="gif of exercise"/>
                            {modal ? (<Modal toggleModal={toggleModal}><img src={process.env.PUBLIC_URL + props.exercise.gif} className="img-fluid  pt-5 mt-5 mb-5 pb-5" alt="gif of exercise"/></Modal>):(<></>)}
                            <div className="card-head">
                            <h5>{props.exercise.exercise}</h5>
                            </div>
                            <div className="justify-content-center text-center">
                                <form className="form">
                                    <div className="form-group">
                                        <input type="hidden" name="weight" value={props.exercise} className="form-control" id="weight" placeholder="Weight" />
                                    </div>
                                    <Button className="mr-1" onClick={handleOnClick} style={{backgroundColor: "#367e3b", marginBottom: '1rem' }}>Add To Workout</Button>
                                </form>    
                            
                            <Button className="ml-1"  onClick={toggle} style={{backgroundColor: "#367e3b", marginBottom: '1rem' }}><BsFillInfoCircleFill/></Button>
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