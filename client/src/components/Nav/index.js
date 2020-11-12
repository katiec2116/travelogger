import logo from './logo2.png';

function Nav() {
    return (

        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-2">
                <img src={logo} style={{ width: "100px" }} alt="logo" />
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-pulled-right">
                <div className="navbar-start is-pulled-right">
                    <a className="navbar-item" href="/explore">
                        Explore
                        </a>

                    <a className="navbar-item" href="/mytrips">
                        My Trips
                        </a>

                    <a className="navbar-item" href="/addtrip">
                        Add a Trip
                        </a>

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
                </div>
                <div class="navbar-item">
                        <a class="button is-primary" href="/">
                            Logout
                        </a>
                </div>
            </div>
        </nav>

    )
}

export default Nav