import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './index.css';
// import auth0Client from './Auth';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";



function Home(props) {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    console.log(user);

    console.log(isAuthenticated)

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //      loginWithRedirect();
    //   }
    //     return () => {
    //     }
    //   }, []) 

    const signOut = () => {
        logout();
        props.history.replace('/');
    }


    return (
        <div className="App" >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {!isAuthenticated && (
                    <button onClick={loginWithRedirect}>Log in</button>
                )}
                {
                    isAuthenticated &&
                    <div>
                        <label className="mr-2 text-white">{user.name}</label>
                    <Link to="/dashboard"><button className="btn btn-dark">dashboard</button></Link>
                        <br />
                        <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button>
                    </div>
                }

            </header>
        </div>
    )


}

export default Home;