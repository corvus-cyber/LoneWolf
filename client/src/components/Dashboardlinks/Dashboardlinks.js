import React from "react";
import { Link } from "react-router-dom";


function StatsLink(){
    return(
        <div className="row justify-content-center">
            <li className="nav-item nav-link">
                <Link
                    to="/stats" className={window.location.pathname === "/stats" || window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}>
                        <button type="submit" className="btn btn-primary calltoaction" style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}>Enter Stats</button>
                </Link>
            </li>
        </div>
    )
}

export default StatsLink;