import React from "react";
import Logo from "../../components/Logo";
import Register from "../../components/Register"

function inital() {
    return (
      <div>
      <div className="columns">
        <div className="column is-4 is-offset-4 has-text-centered">
        <Logo />
        <Register />
      </div>
      </div>
      </div>
    );
  }
  
  export default inital;