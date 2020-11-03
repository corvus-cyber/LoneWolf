import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function StatsLink(){
    return(
        <div className="row justify-content-center">
            <li className="nav-item nav-link">
                <Link
                    to="/stats" className={window.location.pathname === "/stats" || window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}>
                        <button type="submit" className="linktoStats"><h4>Enter Stats</h4></button>
                </Link>
            </li>
        </div>
    )
}

export default StatsLink;