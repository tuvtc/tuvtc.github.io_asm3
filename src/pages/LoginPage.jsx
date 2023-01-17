// import du lieu va css
import React from "react";
import SignIn from "../components/SignIn";
import './LoginPage.css'

// Component LoginPage
function LoginPage () {
    return (
        <div className='login-banner'>
            <SignIn />
        </div>
    )
}

export default LoginPage