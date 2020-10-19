import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }
    render(){
        const show = (this.state.menu) ? "show" : "" ;
    return (
        <nav className="navbar navbar-expand-lg navbar-light absolute-top">
            <div className="navbar-brand">
                <img className="logo" src alt="LoneWolf logo"/>
            </div>
            <button className="navbar-toggler ml-auto" type="button" onClick={ this.toggleMenu }>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show}>
                <ul className="navbar-nav ml-auto navFont">
                    <li className="nav-item nav-link">
                        <Link
                                to="/dashboard" className={window.location.pathname === "/dashboard" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                                to="/stats" className={window.location.pathname === "/stats" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                        Enter Stats
                        </Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                                to="/build" className={window.location.pathname === "/build" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                        Build Workout
                        </Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                            to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                        Log Out 
                        </Link>
                    </li>
                </ul>
            </div>


        
        </nav>
        
    );
    }
}