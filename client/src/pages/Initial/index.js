import Logo from "../../components/Logo";
import LoginSignupBox from "../../components/LoginSignupBox"

function inital() {
    return (
      <div className="columns">
        <div className="column is-4 is-offset-4 has-text-centered">
        <Logo />
        <LoginSignupBox />
      </div>
      </div>
    );
  }
  
  export default inital;