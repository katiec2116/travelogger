import React, {useState} from "react";
import API from "../../utils/API"

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        console.log(username)
        API.getUser(username)
        .then(res => {
            console.log(res.data)
            if (res.data.length === 1){
                window.location.replace("/explore")}
            else {
                alert("You dont have an account yet!")
            }
        }).catch(err =>{
            console.log(err.response);
        })
    };

    return (
        <div>
            <div className="box mt-6">
                <div className="content">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text" 
                            onChange={e => {
                                setUsername(e.target.value);
                                console.log(username)
                            }}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" 
                            onChange={e => {
                                setPassword(e.target.value);
                                console.log(password)
                            }}/>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={onSubmit} >Login</button>
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
