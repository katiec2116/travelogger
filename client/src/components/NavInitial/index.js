import logo from './logo2.png';
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  // const toggleNav = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])



    return (

        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
              <div className="navbar-brand ml-2">
                  <Link to="/"><img src={logo} style={{ width: "100px" }} alt="logo" />
                  </Link>
              </div>
                  <div className="navbar-item ">
                          <Link style={buttonStyle}className="button is-link" to="/register">Signup</Link>
                          <AuthButton />
                  </div>
        </nav>

    )
}

export default Nav