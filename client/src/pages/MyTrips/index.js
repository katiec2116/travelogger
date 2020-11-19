import React from 'react'
import API from "../../utils/API"
import './myTrips.css'
import MyTripsMap from "../../components/MyTripsMap"

class MyTrips extends React.Component {

    state = {
        myTrips: []
    }
    
    componentDidMount() {
        const id = localStorage.getItem('user')
        API.getMyTrips(id)
            .then(results => this.setState({ myTrips: results.data.trips }))
            .catch(err => console.log(err))
    }

    deleteTrip(tripid) {
        const id = localStorage.getItem('user')
        API.deleteTrip(id, tripid)
        .then(results => console.log(results))
        .catch(err => console.log(err))
        .then(this.componentDidMount())
    }

    render() {
        return (
            <div>
            <div className="columns">
                <div className="column is-two-thirds">
                <MyTripsMap long={-81} lat={27} all={this.state.myTrips} />
                </div>
                <div className="column is-one-third">
                    {!this.state.myTrips.length ? (
                        <h1 className="columnHeader has-text-centered mt-5">No Trips to Display</h1>
                    ) : (
                        <div>
                            <h1 className="columnHeader has-text-centered mt-5 mb-3">My Trips</h1>
                            <div style={{display: "flex" ,flexWrap: "wrap", justifyContent:"space-around", alignContent: "flex-start", flexDirection: "row"}}>
                                {this.state.myTrips.map(trip => (
                                    <div style={{width: "200px"}} className="box" key={trip._id}>
                                        <p>Location: <span className="tileTitle">{trip.location} </span></p>
                                        <p className="Tilesubtitle">When: {trip.date}</p>
                                        <p>Notes: {trip.notes}</p>

                                        
                                            <button onClick className="button is-small is-rounded is-outlined is-warning mt-3 ml-3" >
                                                 <strong>Edit</strong>
                                            </button>
                                            <button onClick={() => this.deleteTrip(trip._id)}  className="button is-small is-rounded is-outlined is-danger mt-3 ml-3" >
                                            <strong>x</strong>
                                            </button>
                                    </div> 
                                ))}
                            </div>
                            </div>
                        )}
                </div>
            </div>
        </div> 
        )
    }
}

export default MyTrips;
