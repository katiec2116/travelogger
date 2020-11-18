import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<button className="button is-dark"
				onClick={() => {
					Auth.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				Logout
			</button>
		) : (
				<Link
					className="button is-dark"
					to="/login"
				>Login
				</Link>
			)
	)
}

export default AuthButton;