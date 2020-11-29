import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'

const user = <FontAwesomeIcon icon={faUser} />
const lock = <FontAwesomeIcon icon={faUnlock} />

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div>
			<h5 style={{fontFamily: 'Open Sans', color:"whitesmoke", letterSpacing:"3px"}}>Register a New User</h5>
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="field">
				<div className="control has-icons-left">
					<input className="input mb-3" ref={userNameRef} type='text' name="username" placeholder='Username' />
					<span className="icon is-small is-left">
							{user}
					</span>
					<br />
					<div className="control has-icons-left">
					<input className="input mb-3" ref={passwordRef} type='password'  name="password" placeholder='Password' />
					<span className="icon is-small is-left">
							{lock}
						</span>
						<br />
					<button className="button is-dark my-3" type='submit'> Register</button>
				</div>
				</div>
				</div>
			</form>
		</div>
	)
}


export default RegisterForm