import React from "react";
import Logo from "../../components/Logo";
import Initial from "../../components/Initial"

function inital() {
    return (
      <div>
      <div className="columns">
        <div className="column is-4 is-offset-4 has-text-centered">
        <Logo />
        <Initial />
      </div>
      </div>
      </div>
    );
  }
  
  export default inital;