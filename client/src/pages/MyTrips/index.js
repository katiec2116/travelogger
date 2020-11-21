import React, { useState } from 'react'
import API from "../../utils/API"
import './myTrips.css'
import EditModal from "../../components/EditModal"
import MyTripsMap from "../../components/MyTripsMap"

class MyTrips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false,
            myTrips: [],
            selected:{}
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(trip) {
        this.setState((prev, props) => {
            console.log(trip)
            const newState = !prev.modalState;
            return { ...this.state, modalState: newState, selected:trip };
        });
    }
  
    componentDidMount() {
        const user = localStorage.getItem('user')
        API.getMyTrips(user)
            .then(results => this.setState({ ...this.state, myTrips: results.data }))
            .catch(err => console.log(err))
    }

    deleteTrip(tripid) {
        API.deleteTrip(tripid)
            .then(results => console.log(results))
            .catch(err => console.log(err))
            .then(this.componentDidMount())
    }


    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-two-thirds">
                        <MyTripsMap long={-81} lat={27} trips={this.state.myTrips} />
                    </div>
                    <div className="column is-one-third">
                        {!this.state.myTrips.length ? (
                            <h1 className="columnHeader has-text-centered mt-5">No Trips to Display</h1>
                        ) : (
                                <div>
                                    <h1 className="columnHeader has-text-centered mt-5 mb-3">My Trips</h1>
                                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", justifyContent: "space-around", alignContent: "flex-start", flexDirection: "row" }}>
                                        {this.state.myTrips.map(trip => (
                                            <div style={{ width: "200px" }} className="box" key={trip._id}>
                                                <p className="tileTitle">Location: {trip.location}</p>
                                                <p className="tileSubtitle">When: {trip.date}</p>
                                                <p className="tileSubtitle">Notes: {trip.notes}</p>
                                                <button onClick={() => this.toggleModal(trip)} className="button is-small p-1 is-outlined is-link mt-3 ml-3" >
                                                    <strong>Edit</strong>
                                                </button>
                                                <button onClick={() => this.deleteTrip(trip._id)} className="button p-1 is-small is-outlined is-danger mt-3 ml-3" >
                                                    <strong>Delete</strong>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <EditModal
                                        submitEdit={this.submitEdit}
                                        closeModal={this.toggleModal}
                                        modalState={this.state.modalState}
                                        trip={this.state.selected}>
                                    </EditModal>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    };
}

export default MyTrips;
