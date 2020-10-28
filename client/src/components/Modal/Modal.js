import React from "react";
import "./style.css"

function Modal(props){
    window.onclick=(e)=>{
        if(e.target.id==="customModal"){
            props.toggleModal(e)
        }
    }
    return(
        <aside id="customModal">
            <div className="innerContent">
                {props.children}
            </div>
        </aside>
    )
}

export default Modal;