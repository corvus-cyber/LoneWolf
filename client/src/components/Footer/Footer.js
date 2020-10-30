import React from "react";
import "./style.css"

function Footer(){
    return (
        <div className="row md-4 fixed-bottom">
        <div className="col-md-12 text-muted">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a className="copyrightLink" href="https://corvus-cyber.github.io/React_Portfolio/#/"> Wyatt Hancock and</a>
                <a className="copyrightLink" href="https://dilanli.github.io/Profile-React/"> Dilan Li</a>
                </div>
        </div> 
        </div>
    );
}

export default Footer;