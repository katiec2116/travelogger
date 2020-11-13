import React from "react";
import { useState } from "react"
import API from "../../utils/API";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const userData = {
            username, password
        };
        
        API.createUser(userData)
        .then(res => {
            if(!res.data.errors){
                window.location.replace('/explore')
            }
        }).catch(err =>{
            console.log(err.response);
        })
    };



    return (
        <div>
            <div className="box mt-4">
                <div className="content">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text"
                            onChange={e => {
                                setUsername(e.target.value);
                                console.log(username)}} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" 
                            onChange={e => {
                                setPassword(e.target.value);
                                console.log(password)}} />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                        <button className="button is-link" type="submit" onClick={onSubmit}>Signup</button>
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

export default Signup;
