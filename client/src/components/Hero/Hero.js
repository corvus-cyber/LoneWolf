import React from "react";
import "./style.css";
import backgroundImage from "./Plainhero.png"

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="float-left mt-3">
            <h1>TRANSFORM</h1>
            <h1 className="float-left green">YOUR LIFE</h1>
        </div>
        <div className="float-right text-left mr-2 pitch">
            <div className="pitch-highlight">
                <h6 className="ml-2 pitchFont">We're not like other gyms. <br/>You don't need a contract, or a mask to workout with us.<br/> LoneWolf lets you build your own workout <br/>so your can get your sweat on anytime, anywhere.</h6>     
            </div>
        </div>  
    </div>
  );
}

export default Hero;