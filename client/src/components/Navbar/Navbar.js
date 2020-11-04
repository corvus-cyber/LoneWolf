import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler, 
    Nav,
    NavbarText,
    } from 'reactstrap';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="NavbarColor" dark expand="md">
            <img className="Homelogo" src={"https://corvus-cyber.github.io/LoneWolf/client/public" + "/assets/logo/Lonewolflogo.png"}></img>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavbarText className="ml-2 mr-2"> 
                    <Link to="/dashboard">Dashboard</Link>
                </NavbarText>
                <NavbarText className="ml-2 mr-2">
                  
                    <Link to="/stats">Enter Stats</Link>
                </NavbarText>
                <NavbarText className="ml-2 mr-2">
                    <Link to="/build">Build Workout</Link>
                </NavbarText>
                <NavbarText>
                    <button className="btn-dashboardBttns btn-sm mr-2 ml-2"><Link to="/">Home</Link></button>
                </NavbarText>   
            </Nav>
            </Collapse>
        </Navbar>       
    );
}

export default Header;