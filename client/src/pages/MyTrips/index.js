import React from 'react'
import API from '../../utils/API';
import EditModal from '../../components/EditModal';
import ViewModal from '../../components/ViewModal';
import MyTripsMap from '../../components/MyTripsMap';
// import edit from "./edit.png"

class MyTrips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false,
            viewModalState: false,
            myTrips: [],
            selected: {},
            activeTab: ""
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }

    toggleModal(trip) {
        this.setState((prev, props) => {
            console.log(trip)
            const newState = !prev.modalState;
            return { ...this.state, modalState: newState, selected: trip };
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

    toggleView(trip) {
        this.setState((prev, props) => {
            console.log(trip)
            const newState = !prev.viewModalState;
            return { ...this.state, viewModalState: newState, selected: trip };
        });
    }

    filter(been) {
        const user = localStorage.getItem('user')
        API.getMyTripsType(user, been)
            .then(results => this.setState({ ...this.state, myTrips: results.data, activeTab: been }))
            .catch(err => console.log(err))
    }
    filterAll() {
        this.setState({ ...this.state,  activeTab: "" })
        this.componentDidMount();
            
    }

    render() {
        return (
            <div>
                <div className='columns'>
                    <div className='column is-two-thirds'>
                        <MyTripsMap long={-81} lat={27} trips={this.state.myTrips} />
                    </div>
                    <div className='column is-one-third'>
                        {!this.state.myTrips.length ? (
                            <h1 className='columnHeader has-text-centered mt-6'>No Trips to Display</h1>
                        ) : (
                                <div>
                                    <h1 className='columnHeader has-text-centered mt-6 mb-3'>My Trips</h1>
                                    <div className="buttons has-addons is-centered">
                                        <button className={this.state.activeTab === "No" ? "active" : "notActive"} onClick={() => this.filter("No")}>Planned</button>
                                        <button className={this.state.activeTab === "Yes" ? "active" : "notActive"} onClick={() => this.filter("Yes")}>Visited</button>
                                        <button className={this.state.activeTab === "" ? "active" : "notActive"} onClick={() => this.filterAll()}>All</button>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-around', alignContent: 'flex-start', flexDirection: 'row' }}>
                                        {this.state.myTrips.map(trip => (
                                            <div style={{ width: '200px' }} className='box columns p-1 m-3' key={trip._id}>
                                                <div className="column is-10 p-1">
                                                    <p className='tileTitle location'>{trip.location}</p>
                                                    <p className='tileSubtitle'>When: {trip.date}</p>
                                                    <p className='tileSubtitle'>Notes: {trip.notes}</p>
                                                </div>
                                                <div className="column is-2 p-1">
                                                    <div>
                                                        <img src={require('./view.png')} style={{ maxWidth: "75%", cursor: "pointer" }} alt="view" onClick={() => this.toggleView(trip)} />
                                                    </div>
                                                    <div>
                                                        <img src={require('./edit.png')} style={{ maxWidth: "75%", cursor: "pointer" }} alt="edit" className="py-1" onClick={() => this.toggleModal(trip)} />
                                                    </div>
                                                    <div>
                                                        <img src={require('./delete.png')} style={{ maxWidth: "75%", cursor: "pointer" }} alt="delete" onClick={() => this.deleteTrip(trip._id)} />
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                    <EditModal
                                        submitEdit={this.submitEdit}
                                        closeModal={this.toggleModal}
                                        modalState={this.state.modalState}
                                        trip={this.state.selected}>
                                    </EditModal>
                                    <ViewModal
                                        closeModal={this.toggleView}
                                        ViewModalState={this.state.viewModalState}
                                        trip={this.state.selected}>
                                    </ViewModal>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    };
}

export default MyTrips;
