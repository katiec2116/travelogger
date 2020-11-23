import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import PopupModal from '../../components/PopupModal';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            status: "like",
            like: false,
            viewModalState: false,
        }

        this.toggleView = this.toggleView.bind(this);
    } 
  

    toggleView() {
        this.setState((prev, props) => {
            console.log(this.props.trip)
            const newState = !prev.viewModalState;
            return { ...this.state, viewModalState: newState, selected: this.props.trip };
        });
    }

     likeTrip = () => {
         const user = localStorage.getItem("user")
        if (this.props.trip.likes.includes(user)) {
            API.unlikeTrip(this.props.trip._id)
            this.setState({ ...this.state, like: false, status: "like" })
            console.log(this.state.status)

        }
        else {
            const user = localStorage.getItem("user")
            API.likeTrip(this.props.trip._id, user)
            this.setState({ ...this.state, like: true, status: "unlike" })
            console.log(this.state.status)
        }
    }


    render() {
        const user = localStorage.getItem("user")
    if (this.props.trip.been === "Yes") {
        return (
            <div>
                <bold>{this.props.trip.user} </bold> visited <bold>{this.props.trip.location}</bold>
                {!this.props.trip.likes.includes(user) ? (
                    <div>
                        <p> <small>Liked by {this.props.trip.likes.length} people</small></p >
                        <button className="button is-small is-rounded" onClick={() => this.likeTrip(!this.state.like)}> like</button><button className="button is-small is-rounded" onClick={() => this.toggleView()}> See More</button>
                    </div>

                ) :
                    <div>
                        <p> <small>Liked by You and {this.props.trip.likes.length - 1} other people</small></p >
                        <button className="button is-small is-rounded" onClick={() => this.likeTrip(!this.props.trip.like)}> like </button><button className="button is-small is-rounded" onClick={() => this.toggleView()}> See More</button>
                    </div>
                }
                <PopupModal
                    closeModal={this.toggleView}
                    viewModalState={this.state.viewModalState}
                    trip={this.props.trip}>
                </PopupModal>
            </div >
        )
    }
    else {
        return (
            <div>
                <bold>{this.props.trip.user} </bold> wants to vist <bold>{this.props.trip.location}</bold>
                <p> <small>Liked by {this.props.trip.likes.length} people</small></p>
                <button className="button is-small is-rounded" onClick={() => this.likeTrip(!this.state.like)}> like</button>
                {/* <button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button> */}

            </div>
        )
    }

}
}

export default Popup
