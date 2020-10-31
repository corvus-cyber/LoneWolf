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


function Home(props) {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    console.log(user);

    console.log(isAuthenticated)

    const signOut = () => {
        logout();
        props.history.replace('/');
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className="App" >
        <Navbar className="NavbarColor" light expand="md">
            <img className="Homelogo" src={process.env.PUBLIC_URL + "/White-logo.png"}></img>
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
                    <button className="btn-dashboardBttns btn-sm mr-2 ml-2" onClick={() => { signOut()}}>Sign Out</button>
                </NavbarText>   
            </Nav>
            </Collapse>
        </Navbar>
            
            {/* <Wrapper>
            <header className="App-header">
                <div className="row justify-content-center pt-5 mt-5 mb-5">
                    <img src={process.env.PUBLIC_URL + "/assets/logo/Blacklogo.png"} className="App-logo" alt="logo" />

                </div>
                <div className="row justify-content-center">
                    <div classnName="col-md-4 justify-content-center">
                    {!isAuthenticated && (
                        <button className="btn-dashboardBttns btn-lg mr-1 ml-1" onClick={loginWithRedirect}>Log in</button>
                        )}
                    </div>
                    <div classnName="col-md-4 justify-content-center">
                        {
                        isAuthenticated &&
                        <div>
                        <Link to="/dashboard"><button className="btn-dashboardBttns btn-lg mt-1 mr-2 ml-2">Dashboard</button></Link>
                        <Link to="/build"><button className="btn-dashboardBttns btn-lg mt-1 mr-2 ml-2">Build Workout</button></Link>    
                            <button className="btn-dashboardBttns btn-lg mt-2 mr-2 ml-2" onClick={() => { signOut()}}>Sign Out</button>
                        </div>
                        }     
                    </div>
                </div>
            </header>
            </Wrapper> */}
        </div>
    )


}

export default Home;