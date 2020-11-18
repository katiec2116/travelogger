import React from "react";
import Logo from "../../components/Logo";
import Initial from "../../components/Initial";
import "./initial.css"

function inital() {
    return (
      <section className="hero is-fullheight">
      <div className="columns">
        <div className="column is-4 is-offset-4 has-text-centered">
        <Logo />
        <Initial />
      </div>
      </div>
      </section>
    );
  }
  
  export default inital;