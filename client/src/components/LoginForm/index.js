import React, { useRef } from 'react'
// import Card from "../Card"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div>
            <h1>Login with your Username and Password</h1>
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn-success" type='submit'>
						Submit
						</button>
				</div>
			</form>
		</div>
	)
}


export default LoginForm