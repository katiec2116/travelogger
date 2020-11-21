import React from "react";
import API from "../../utils/API"
import ExploreMap from "../../components/ExploreMap"

class Explore extends React.Component {

    state = {
        trips: [],
    }


    componentDidMount() {
        const user = localStorage.getItem('user')
        API.getAllTrips(user)
            .then(results => {
                this.setState({trips:results.data})})
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="container1">
                <div className="columns">
                    <div className="column is-9 py-6 mt-6">
                        <ExploreMap long={-81} lat={27} all={this.state.trips} />
                    </div>
                    <div className="column is-3 py-6 mt-6">
                        <aside className="menu" style={{ border: '1px solid black' }}>
                            <ul className="menu-list">
                            {this.state.trips.map(trip => (
                              <li key={trip._id}>{trip.username} added: <span>{trip.date}</span>  to their trips!</li>
                              ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;