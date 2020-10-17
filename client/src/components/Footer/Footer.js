import React from "react";
import "./style.css"

function Footer(){
    return (
        <div className="row md-4 fixed-bottom">
        <div className="col-md-12 text-muted">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a className="copyrightLink" href="https://www.linkedin.com/in/wyatt-a-hancock-885705166/"> Wyatt A. Hancock</a>
                </div>
        </div> 
        </div>
    );
}

export default Footer;