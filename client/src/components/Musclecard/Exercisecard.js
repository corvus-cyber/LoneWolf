import React, {useState} from 'react'
import "./style.css"
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import {
  BsFillInfoCircleFill
} from "react-icons/bs";


export default function Exercisecard(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const revealCard = () =>{
    //     let x = document.getElementById(props.exerciseID);
    //     console.log(props);

    //     // if (x.style.display === "none") {
    //     //   x.style.display = "block";
    //     // } else {
    //     //   x.style.display = "none";
    //     // }
    // }


    return(
        <div className="mr-2 ml-2">
            <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
                <div className="card" style={{width: 18 + "rem"}} key={props.exerciseID}>
                    <img src={process.env.PUBLIC_URL + props.gif} className="card-img-top" alt="gif of exercise"/>
                        <div className="card-head">
                        <h5>{props.exercise}</h5>
                        </div>
                        <div>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}><BsFillInfoCircleFill/></Button>
                        <Collapse isOpen={isOpen}>
                            <Card>
                            <CardBody>
                            {props.description}
                            </CardBody>
                            </Card>
                        </Collapse>
                        </div>
                        {/* <button type="button" className="btn btn-custom show-btn " data-rel={props.exerciseID} onClick={revealCard()}>
                            <BsFillInfoCircleFill/>
                        </button>
                        
                        <div className="card-reveal" id={props.exerciseID} data-rel={props.exercise} style={{display: "none"}}>
                            <p>{props.description}</p>
                        </div> */}
                </div> 
            </div> 
        </div>
    )

}