import Logo from "../Logo";
function Signup() {
    return (
        <div>
            <div className="column is-4 is-offset-4">
                <div><Logo className="has-text-centered" /></div>
                <div className="box mt-4">
                    <div className="content">


                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email"/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                            </div>
                        </div>

                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" />
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
                                    <button className="button is-link">Signup</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
}

export default Signup;
