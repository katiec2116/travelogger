import logo from './logo1.png';
import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../utils/UserContext';
import AuthButton from "../AuthButton";

const buttonStyle = {
    marginRight: 10
};

function Nav() {

    const history = useHistory();

    const [user, setUser] = useContext(UserContext)

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [isActive, setisActive] = React.useState(false);

    const updateWidth = () => {
        if (open && width > 991) {
            setOpen(false);
        }
        setWidth(window.innerWidth)
    };

    useEffect(() => {

        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, [])


    if (!user) {
        return (
            <div></div>
            // <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            //     <div className="navbar-brand ml-2">
            //         <Link to="/"><img src={logo} style={{ width: "100px" }} alt="logo" />
            //         </Link>
            //     </div>
            //     <div className="navbar-end">
            //         <div className="navbar-item">
            //             <Link style={buttonStyle} className="button is-light" to="/register">Signup</Link>
            //             <AuthButton />
            //         </div>
            //     </div>
            // </nav>
        )
    }
    else {
        return (

            <nav className="navbar myNav" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ml-2">
                    <img src={logo}  alt="logo" />
                    <span className="logoNav navbar-item">TRAVELOGGER</span>

                    <a
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>


                <div className={`navbar-menu navbar-end ${isActive ? "is-active" : ""}`}id="navbarBasicExample">
                    <Link className="navbar-item" to={`/explore/${user}`}>
                        Explore
                        </Link>

                    <Link className="navbar-item" to={`/mytrips/${user}`}>
                        My Trips
                        </Link>

                    <Link className="navbar-item" to={`/addtrip/${user}`} onClick={() => history.push('/addtrip')}>
                        Add a Trip
                        </Link>
                    <div className="navbar-item">
                        <AuthButton />
                    </div>
                </div>
            </nav>

        )
    }
}

export default Nav