import React, {useState} from 'react'
import "./style.css"
import { Collapse, CardBody } from 'reactstrap';
import Modal from "../Modal/Modal";
import {
  BsFillInfoCircleFill
} from "react-icons/bs";


export default function Exercisecard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    function handleOnClick(){
        props.exerciseArray(props.exercise);
    };

    const toggleModal=(e, gif)=>{
        e.preventDefault();
        setModal(!modal);
    }

return(
    <div className="mr-2 ml-2">
                <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
                    <div className="card" id="card" style={{width: 18 + "rem"}} key={props.exercise.exerciseID}>
                        <img src={"https://corvus-cyber.github.io/LoneWolf/client/public" + props.exercise.gif} onClick={(e)=>toggleModal(e, props.exercise.gif)} className="img-fluid" alt="gif of exercise"/>
                            {modal ? (<Modal toggleModal={toggleModal}><img src={"https://corvus-cyber.github.io/LoneWolf/client/public" + props.exercise.gif} className="img-fluid  pt-5 mt-5 mb-5 pb-5" alt="gif of exercise"/></Modal>):(<></>)}
                            <div className="card-head">
                            <h5>{props.exercise.exercise}</h5>
                            </div>
                            <div className="justify-content-center text-center">
                                <form className="form">
                                    <div className="form-group">
                                        <input type="hidden" name="weight" value={props.exercise} className="form-control" id="weight" placeholder="Weight" />
                                    </div>
                                    <button type="button" className="btnAdd btn-sm mb-1" onClick={handleOnClick}>Add To Workout</button>
                                </form>    
                            
                            <button type="button" className="btn-information mb-1 btn-sm"  onClick={toggle}><BsFillInfoCircleFill/></button>
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