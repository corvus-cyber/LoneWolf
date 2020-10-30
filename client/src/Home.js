import React from 'react';
import logo from './logo.svg';
import './index.css';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";



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
            <header className="App-header">
                <div className="row justify-content-center">
                    <img src={process.env.PUBLIC_URL + "/assets/logo/Blacklogo.png"} className="App-logo" alt="logo" />

                </div>
                <div className="row justify-content-center">
                    <div classnName="col-md-4 justify-content-center">
                    {!isAuthenticated && (
                        <button onClick={loginWithRedirect}>Log in</button>
                        )}
                    </div>
                    <div classnName="col-md-4 justify-content-center">
                        {
                        isAuthenticated &&
                        <div>
                            <label className="mr-2 text-white">{user.name}</label>
                        <Link to="/dashboard"><button className="btn btn-dark">Dashboard</button></Link>
                            
                            <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button>
                        </div>
                        }     
                    </div>
                </div>
                
                


            </header>
        </div>
    )


}

export default Home;