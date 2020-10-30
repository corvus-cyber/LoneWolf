import React from 'react';
import './index.css';
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


    return (
        <div className="App" >
            <Wrapper>
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
            </Wrapper>
        </div>
    )


}

export default Home;