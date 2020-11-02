import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler, 
    Nav,
    NavbarText,
    } from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper"
import "./components/Wrapper/login.css"
import Hero from "./components/Hero/Hero"


function Home(props) {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    console.log("here is the user", user);

    console.log(isAuthenticated)

    const signOut = () => {
        logout();
        props.history.replace('/');
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return (
        <div className="App" >
        <Navbar className="NavbarColor" dark expand="md">
            <img className="Homelogo" src={process.env.PUBLIC_URL + "/assets/logo/lonewolflogo.png"}></img>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavbarText>
        
                {!isAuthenticated && (
                            <button className="btn-dashboardBttns btn-sm mr-1 ml-1" onClick={loginWithRedirect}>Log in</button>
                    )}
                </NavbarText>
                <NavbarText className="ml-2 mr-2">
                    {isAuthenticated &&  
                <Link to="/dashboard">Dashboard</Link>}
                </NavbarText>
                <NavbarText className="ml-2 mr-2">
                {isAuthenticated &&  
                    <Link to="/stats">Enter Stats</Link>}
                </NavbarText>
                <NavbarText className="ml-2 mr-2">
                    {isAuthenticated &&  
                    <Link to="/build">Build Workout</Link>}
                </NavbarText>
                <NavbarText>
                    {isAuthenticated && 
                    <button className="btn-dashboardBttns btn-sm mr-2 ml-2" onClick={() => { signOut()}}>Sign Out</button>}
                </NavbarText>   
            </Nav>
            </Collapse>
        </Navbar>
        <Hero/>
        <Wrapper>
        <div className="row">
            <div className="col-md-8">
                <img src={process.env.PUBLIC_URL + "/assets/images/Musclecircle.png"} className="muscleCircle" />
            </div>
                <div className="col-md-4 mb-5 align-self-end">
                    <h3 className="white">Choose How You Build</h3>
                    <h6 className="white">Pick which muscle group you want to work on, select an exercise and then get to work!</h6>
                </div>
        </div>    
        <div className="row">
            <div className="col-md-4 mt-5">
                    <h3 className="white">So Drop The Weights</h3>
                    <h6 className="white">And Hit The Floor!</h6>
            </div>
            <div className="col-md-8 align-self-end justify-content-end">
                <img src={process.env.PUBLIC_URL + "/assets/images/droptheweights.png"} className="hitFloor justify-content-end float-right" />

            </div>
        </div>
        <div className="row mt-5 pt-5">
            <div className="col-md-12 text-center">
                <h1 className="white">PUSH YOUR LIMITS</h1>
            </div>
        </div>
        </Wrapper>    
        </div>
    )


}

export default Home;