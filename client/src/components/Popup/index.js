import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import PopupModal from '../../components/PopupModal';

function Popup({ trip }) {

    const [likes, setLikes] = useState(
        {
            status: "",
            like: false,
            viewModalState: false,
        }
    )

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (trip.likes.includes(user)) {
            console.log("already liked")
            // setLikes({...likes, status:"unlike"})
        }
      });

    const toggleView = () => {
        setLikes((prev, props) => {
            console.log(trip)
            const newState = !prev.viewModalState;
            return { ...likes, viewModalState: newState};
        });
    }

    const likeTrip = () => {
        console.log("from like trip " ,trip)
        const user = localStorage.getItem("user")
        if (trip.likes.includes(user)) {
            API.unlikeTrip(trip._id)
            setLikes({ like: true, status: "like" })
            
        }
        else {
            API.likeTrip(trip._id, user)
            setLikes({ like: true, status: "unlike" })
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
