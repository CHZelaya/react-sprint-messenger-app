import React from 'react';
import Button from "../button/button.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";



const Login = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div className="login-container">
            <h3> This is the login component</h3>
            <Button onClick={logGoogleUser} />
        </div>
    )
}

export default Login