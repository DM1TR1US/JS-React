import React from 'react';
import { Redirect } from 'react-router-dom';


const LogoutForm = (props) => {

    let isContinue = () =>{
        return <Redirect to={"/profile"} />
    }
    let isLogout = () => {
        props.logout();
    }

    return (
           <div>
               <h3>You are already logged in.</h3>
               <button onClick={isContinue} >Continue</button>
               <button onClick={isLogout}>Logout</button>
           </div>
    )
}

export default LogoutForm;