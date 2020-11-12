import Logo from "../Logo";
function Login() {
    return (
        <div>
            <div className="box mt-6">
                <div className="content">

                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <a className="button is-link" href="/explore">Login</a>
                        </div>
                        <div className="control">
                            <a className="button is-link is-light" href="/">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;
