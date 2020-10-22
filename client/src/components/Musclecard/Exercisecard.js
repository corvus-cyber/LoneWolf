import React from 'react'
import "./style.css"

import {
  BsFillInfoCircleFill
} from "react-icons/bs";
import $ from 'jquery';

export default function Card(props) {
    $('.list-group-item').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      });
  
      $('.show-btn').on('click', function () {
        console.log("hello")
        $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
      });
  
      $('.card-reveal .close').on('click', function () {
        $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
      });
    return(
        <div className="mr-2 ml-2">
            <div className="col-md-4 mr-2 ml-2 mt-5 text-center justify-content-center">
                <div className="card" style={{width: 18 + "rem"}} key={props.exerciseID}>
                    <img src={process.env.PUBLIC_URL + props.gif} className="card-img-top" alt="gif of exercise"/>
                        <div className="card-head">
                        <h5>{props.exercise}</h5>
                        <button type="button" className="btn btn-custom show-btn " data-rel={props.exerciseID}>
                            <BsFillInfoCircleFill/>
                        </button>
                        </div>
                        <div className="card-reveal" data-rel={props.exercise} style={{display: "none"}}>
                        <button type="button" className="close" data-rel={props.exercise} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span></button>
                        <p>{props.description}</p>
                    </div>
                </div> 
            </div> 
        </div>
    )
}