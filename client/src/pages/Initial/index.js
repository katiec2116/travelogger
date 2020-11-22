import React from "react";
import Logo from "../../components/Logo";
import Initial from "../../components/Initial";


function inital() {
  return (
    <section className="hero">
      <div className="hero-body p-3">
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-centered">
              <Logo />
              <Initial />
          </div>
        </div>
      </div>
    </section>
  );
}

export default inital;