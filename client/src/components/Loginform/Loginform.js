import React from 'react';
import Wrapper from "../Wrapper/Wrapper"
import { Link } from "react-router-dom";
import "../Style/style.css"
function Login(){
    return(
        <Wrapper>
            <form className="Login mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="InputUsername">Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="current-password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}>Join</button>
                </div>
            </form>
            <div className="row justify-content-center mt-5">
                <Link to="/dashboard" className={window.location.pathname === "/dashboard" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        <button type="submit" className="calltoaction btn-sm" style={{backgroundColor: "#F4C430", borderColor: "#F4C430"}}>New User</button>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Login;