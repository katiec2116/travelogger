import Initial from "./pages/Initial"
import Signup from "./components/Signup"
import Login from "./pages/Login"
import Explore from "./pages/Explore"
// import MyTrips from "./pages/MyTrips"
import AddTrip from "./pages/AddTrip"


import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bulma/css/bulma.css'

function App() {
  return (

    <Router>
      <Route exact path="/" component={Initial} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/explore" component={Explore} />
      {/* <Route exact path="/mytrips" component={MyTrips} /> */}
      <Route exact path="/addtrip" component={AddTrip} />
    </Router>
  );
}

export default App;
