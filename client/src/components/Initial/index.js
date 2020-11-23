import React from "react";
import AuthButton from "../../components/AuthButton";
import { Link } from "react-router-dom";

const buttonStyle = {
    marginRight: 10
};
function LoginSignupBox() {
    return (

                <div className="content pb-5 px-5">
                    <div className="logoTitle pb-3">TRAVELOGGER</div>
                    <p className="blurb">
                    Log and share travel memories with friends 
                        </p>
                        <div >
                        <Link style={buttonStyle} className="button is-kight" to="/register">Signup</Link>
                        <AuthButton />
                    </div>
                </div>

    );
}

export default LoginSignupBox;
