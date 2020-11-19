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
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            return { modalState: newState };
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
                        <MyTripsMap long={-81} lat={27} all={this.state.myTrips} />
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
                                                <p>Location: <span className="tileTitle">{trip.location} </span></p>
                                                <p className="Tilesubtitle">When: {trip.date}</p>
                                                <p>Notes: {trip.notes}</p>


                                                <button onClick={this.toggleModal} className="button is-small is-rounded is-outlined is-warning mt-3 ml-3" >
                                                    <strong>Edit</strong>
                                                </button>
                                                <button onClick={() => this.deleteTrip(trip._id)} className="button is-small is-rounded is-outlined is-danger mt-3 ml-3" >
                                                    <strong>x</strong>
                                                </button>
                                                <EditModal
                                                    submitEdit={this.submitEdit}
                                                    closeModal={this.toggleModal}
                                                    modalState={this.state.modalState}
                                                    trip={trip}>
                                                </EditModal>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    };
}

export default MyTrips;
