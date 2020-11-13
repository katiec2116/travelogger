import React from "react";
import Logo from "../../components/Logo";
import Signup from "../../components/Signup";


function SignupPage() {
    return (
        <div>
            <div className="column is-4 is-offset-4">
                <div><Logo /></div>
                <Signup />
            </div>
        </div>

)}
export default SignupPage