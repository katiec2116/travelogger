import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Login from "./pages/Login";
import Initial from "./pages/Initial"
import Register from "./pages/Register";
import Explore from "./pages/Explore";
// import Profile from "./pages/Profile";
import AddTrip from "./pages/AddTrip";
import MyTrips from "./pages/MyTrips"
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch"
import 'bulma/css/bulma.css'
import ProtectedRoute from "./pages/ProtectedRoute";
import './pages/style.css';
import { UserProvider } from "./utils/UserContext";
const dotenv = require('dotenv').config() 

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<div>
					<Nav />
					<Switch>
					<Route exact path="/" component=   {Initial} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route exact path ="/explore/:id" component ={Explore} />
						{/* <Route exact path ="/profile/:id" component ={Profile} /> */}
						<Route  path ="/mytrips/:id" component ={MyTrips} />
            			<Route  path ="/addtrip/:id" component ={AddTrip} />
						<PrivateRoute path="/explore" component={ProtectedRoute} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</div>
			</div>
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<NoMatch/>
							<div className="row">
								<div className="col-sm"></div>
								
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)


export default AuthExample

