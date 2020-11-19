import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'

const user = <FontAwesomeIcon icon={faUser} />
const lock = <FontAwesomeIcon icon={faUnlock} />

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div>
			<h3>Login</h3>
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
				<div className="field">
					<div className="control has-icons-left has-icons-right">
						<input className="input mb-3" ref={userNameRef} type='text' name="username" placeholder='Enter Username' />
						<span className="icon is-small is-left">
							{user}
						</span>
						<br />
					</div>
					<div className="control has-icons-left has-icons-right">
						<input className="input mb-3" ref={passwordRef} type='password' name="password" placeholder='Password' />
						<span className="icon is-small is-left">
							{lock}
						</span><br />
						<button className="button is-dark my-3" type='submit'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}


export default LoginForm