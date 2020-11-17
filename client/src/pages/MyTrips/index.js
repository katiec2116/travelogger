import React from 'react'
import API from "../../utils/API"
import Map from "../../components/Map"

class MyTrips extends React.Component {

    state = {
        myTrips: []
    }

    componentDidMount() {
        const id = localStorage.getItem('user')
        console.log("hi")
        API.getMyTrips(id)
            .then(results => this.setState({ myTrips: results.data.trips }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    {!this.state.myTrips.length ? (
                        <h1 className="subtitle has-text-centered mb-6 pb-6">No Trips to Display</h1>
                    ) : (
                            <div>
                                {this.state.myTrips.map(trip => (
                                    <div className="card mb-3 py-5 px-5" key={trip._id}>
                                        <h5>Location: {trip.location} </h5>
                                        <p className="card-subtitle">When: {trip.date}</p>
                                        <p>Notes: {trip.notes}</p>
                                    </div> 
                                ))}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default MyTrips;
