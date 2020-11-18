import React from "react";
import Logo from "../../components/Logo";
import Login from "../../components/Login";
import '../initial.css';

function LoginPage() {
  return (
    <section className="hero">
      <div class="hero-body mt-6">
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-centered">
            <div class="welcome is-rounded has-text-centered mt-6">
              <Logo />
              <div className="logoTitle pb-6">Travelogger</div>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default LoginPage;