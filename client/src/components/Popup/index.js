import React from 'react';
import API from "../../utils/API"
import PopupModal from '../../components/PopupModal';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // status: 'no',
            like: false,
            // viewModalState: false,
        }
    }



    likeTrip = (value) => {
        const user = localStorage.getItem("user")
        if (value === false) {
            API.unlikeTrip(this.props.trip._id, user)
                .then(this.props.refreshPopup())

        }
        else {
            const user = localStorage.getItem("user")
            API.likeTrip(this.props.trip._id, user)
                .then(this.props.refreshPopup())

        }
    }


    render() {
        const user = localStorage.getItem("user")
        if (this.props.trip.been === "Yes") {
            return (
                <div>
                    <strong>{this.props.trip.user} </strong> visited <strong>{this.props.trip.location}</strong>
                    <br/>
                    <button className="button is-small is-rounded" onClick={() => { this.props.showDetails(this.props.trip) }}> See More</button>
                    {/* {!this.props.trip.likes.includes(user) ? (
                        <div>
                            <p> <small>Liked by {this.props.trip.likes.length} people</small></p >
                            <button className="button is-small is-rounded" onClick={() => this.likeTrip(true)}>Like</button><button className="button is-small is-rounded" onClick={() => { this.props.showDetails(this.props.trip) }}> See More</button>
                        </div>

                    ) :
                        <div>
                            <p> <small>Liked by You and {this.props.trip.likes.length - 1} other people</small></p >
                            <button className="button is-small is-rounded" onClick={() => this.likeTrip(false)}>Unlike</button><button className="button is-small is-rounded" onClick={() => { this.props.showDetails(this.props.trip) }}> See More</button>
                        </div>
                    } */}

                </div >
            )
        }
        else {
            return (
                <div>
                    <strong>{this.props.trip.user} </strong> wants to vist <strong>{this.props.trip.location}</strong>
                    <br/>
                    <button className="button is-small is-rounded" onClick={() => { this.props.showDetails(this.props.trip) }}> See More</button>
                    </div>


                    )
        }

    }
}

export default Popup
                  