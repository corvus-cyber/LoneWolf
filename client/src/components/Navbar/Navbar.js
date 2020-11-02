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

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         menu: false
    //     };
    //     this.toggleMenu = this.toggleMenu.bind(this);
    // }
    // toggleMenu(){
    //     this.setState({ menu: !this.state.menu })
    

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark absolute-top">
        //     <div className="navbar-brand">
        //         <img className="logo" src={process.env.PUBLIC_URL + "/assets/logo/Lonewolflogo.png"} alt="LoneWolf logo"/>
        //     </div>
        //     <button className="navbar-toggler ml-auto" type="button" onClick={ this.toggleMenu }>
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className={"collapse navbar-collapse " + show}>
        //         <ul className="navbar-nav ml-auto navFont">
        //             <li className="nav-item nav-link">
        //                 <Link
        //                         to="/dashboard" className={window.location.pathname === "/dashboard" || window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        //                 >
        //                 Dashboard
        //                 </Link>
        //             </li>
        //             <li className="nav-item nav-link">
        //                 <Link
        //                         to="/stats" className={window.location.pathname === "/stats" || window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}
        //                 >
        //                 Enter Stats
        //                 </Link>
        //             </li>
        //             <li className="nav-item nav-link">
        //                 <Link
        //                         to="/build" className={window.location.pathname === "/build" || window.location.pathname === "/build" ? "nav-link active" : "nav-link"}
        //                 >
        //                 Build Workout
        //                 </Link>
        //             </li>
        //             <li className="nav-item nav-link">
        //                 <Link
        //                     to="/" className={window.location.pathname === "/" || window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        //                 >
        //                 Log Out 
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>


        
        // </nav>
        <Navbar className="NavbarColor" dark expand="md">
            <img className="Homelogo" src={process.env.PUBLIC_URL + "/assets/logo/lonewolflogo.png"}></img>
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