import React from 'react';
import API from "../../utils/API"
import ExploreMap from "../../components/ExploreMap"



class Explore extends React.Component {

    state = {
        trips: [],

    }
    componentDidMount() {
        const user = localStorage.getItem('user')

        API.getAllTrips(user).then(results => {
            this.setState({trips:results.data})}).then(() => (this.state.trips));

        this.timer = setInterval(() => API.getAllTrips(user).then(results => {
            this.setState({trips:results.data})}).then(() => console.log(this.state.trips)),
            10000,
        );

    }

//         componentDidMount() {
//             const user = localStorage.getItem('user')
    
//             API.getAllTrips(user).then(results => {
//                 this.setState({trips:results.data})}).then(() => (this.state.trips));
    
//             this.timer = setInterval(() => API.getAllTrips(user).then(results => {
//                 this.setState({trips:results.data})}).then(() => console.log(this.state.trips)),
//                 10000,
//             );
//         }
    
        componentWillUnmount() {
            clearInterval(this.timer);
        }


    render() {
        return (
            <div className="container1">
                <div className="columns">
                    <div className="column is-9 mt-6">
                        <ExploreMap long={-81} lat={27} all={this.state.trips} />
                    </div>
                    <div className="column is-3 mt-6">
                        <aside className="menu" style={{ border: '1px solid black' }}>
                            <ul className="menu-list">
                            <p className="menu-label" style={{borderBottom: "1px solid black", marginBottom: "0px", fontSize: "18px", padding: "5px 10px", color: "black", fontWeight: "500"}}>
                                Live Stream
                            </p>
                            {this.state.trips.map(function(trip, i){
                                 if (trip.been === 'Yes') {
                                     return <li key={trip._id} style={{padding: "15px 10px", borderBottom: "1px solid #75cff1", color: "#000"}}>{trip.user} added {trip.location} to their trips!</li>
                                 } else {
                                     return <li key={trip._id} style={{padding: "15px 10px", borderBottom: "1px solid #75cff1", color: "#000"}}>{trip.user} wants to visit {trip.location}!</li>
                                 }
                             })}
                          </ul>
                      </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;