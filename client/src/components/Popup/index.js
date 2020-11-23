import React, { useState } from 'react';
import API from "../../utils/API"
import PopupModal from '../../components/PopupModal';

function Popup({ trip }) {

    const [likes, setLikes] = useState(
        {
            status: "like",
            like: false,
            viewModalState: false,
        }
    )


    const toggleView = () => {
        setLikes((prev, props) => {
            console.log(trip)
            const newState = !prev.viewModalState;
            return { ...likes, viewModalState: newState};
        });
    }

    const likeTrip = () => {
        // API.getTrip(trip._id)
        const user = localStorage.getItem("user")
        if (likes.like === false) {
            API.likeTrip(trip._id, user)
            setLikes({ like: true, status: "unlike" })
        }
        else {
            API.unlikeTrip(trip._id)
            setLikes({ like: true, status: "like" })
        }
    }

    if (trip.been === "Yes") {
        return (
            <div>
                <bold>{trip.user} </bold> visited <bold>{trip.location}</bold>
                <p> <small>Liked by {trip.likes.length} people</small></p>
                <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> {likes.status}</button><button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button>

                <PopupModal
                    closeModal={toggleView}
                    ViewModalState={likes.viewModalState}
                    trip={trip}>
                </PopupModal>
            </div>
        )
    }
    else {
        return (
            <div>
                <bold>{trip.user} </bold> wants to vist <bold>{trip.location}</bold>
                <p> <small>Liked by {trip.likes.length} people</small></p>
                <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> {likes.status}</button><button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button>
            </div>
        )
    }
}

export default Popup
