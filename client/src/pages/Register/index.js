import React from "react";
import Logo from "../../components/Logo";
import Register from "../../components/Register"

function inital() {
    return (
      <section className="hero">
      <div className="hero-body mt-6">
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-centered">
            <div className="welcome is-rounded has-text-centered mt-6">
              <Logo />
              <div className="logoTitle pb-6">Travelogger</div>
              <Register />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default inital;