import React from "react";
import Logo from "../../components/Logo";
import Login from "../../components/Login";
import '../style.css';

function LoginPage() {
  return (
    <section className="hero">
      <div className="hero-body p-1">
        <div className="columns" >
          <div className="column is-10 is-offset-1 has-text-centered" style={{marginTop:"5%"}}>
            <div className="welcome is-rounded has-text-centered">
              <Logo />
              <div className="logoTitle pb-3">TRAVELOGGER</div>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default LoginPage;