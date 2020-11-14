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
                <img src={logo} style={{ width: "100px" }} alt="logo" />
            </div>


                <div className="navbar-start is-pulled-right">
                    <Link className="navbar-item" to="/explore">
                        Explore
                        </Link>

                    <Link className="navbar-item" to="/mytrips">
                        My Trips
                        </Link>

                    <Link className="navbar-item" to="/addtrip">
                        Add a Trip
                        </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                         </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                                </a>
                            <a className="navbar-item">
                                Contact
                                </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                                    </a>
                        </div>

                </div>
                <div class="navbar-item">
                        <Link class="button is-primary" to="/">
                            Logout
                        </Link>
                </div>
            </div>
        </nav>

    )
}

export default Nav