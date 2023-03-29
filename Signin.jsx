import React from "react";
const Signin =(props)=>{
    return(
        <div className="mainblock">
            <form action="">
            <label htmlFor="username"></label>
            <input placeholder={props.placeholder} onChange={e=>{props.setUsername()}} type="text" id="username"/>
            </form>
        </div>
    )
}
export default Signin;