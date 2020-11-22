import React from "react";
import Logo from "../../components/Logo";
import Initial from "../../components/Initial";
import "../initial.css"


function inital() {
  return (
    <section className="hero">
      <div className="hero-body p-3">
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-centered">
            <div className="welcome is-rounded has-text-centered">
              <Logo />
              <Initial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default inital;