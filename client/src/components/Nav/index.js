import logo from './logo1.png';
import './nav.css'
import React, { useEffect, useState, useContext } from "react";
import { Link , useHistory} from "react-router-dom";
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
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand ml-2">
                  <Link to="/"><img src={logo} style={{ width: "100px" }} alt="logo" />
                  </Link>
              </div>
              <div className="navbar-end">
                  <div className="navbar-item">
                          <Link style={buttonStyle}className="button is-light" to="/register">Signup</Link>
                          <AuthButton />
                  </div>
                  </div>
        </nav>
        )
    }
    else{
    return (

        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-2">
                <Link to="/"><img src={logo} style={{ width: "100px" }} alt="logo" />
                  </Link>
            </div>


            <div className="navbar-start is-pulled-right">
                <Link className="navbar-item" to={`/explore/${user}` }>
                    Explore
                        </Link>

                <Link className="navbar-item" to= {`/mytrips/${user}` }>
                    My Trips
                        </Link>

                <Link className="navbar-item" to={`/addtrip/${user}` }onClick={()=>history.push('/addtrip')}>
                    Add a Trip
                        </Link>

                <div className="navbar-item">
                    <a className="button is-primary" href="/login">
                        Logout
                        </a>
                </div>
            </div>
        </nav>

    )
}}

export default Nav