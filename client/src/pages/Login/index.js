import React from "react";
import Logo from "../../components/Logo";
import Login from "../../components/Login";
function LoginPage() {
    return (
        <div>
        <div className="columns">
          <div className="column is-4 is-offset-4 has-text-centered">
          <Logo />
          <Login />
        </div>
        </div>
        </div>
)}
export default LoginPage;