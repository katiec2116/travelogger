import React, { useState, useEffect } from 'react';
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
    const user = localStorage.getItem("user")




    const toggleView = () => {
        setLikes((prev, props) => {
            console.log(trip)
            const newState = !prev.viewModalState;
            console.log(newState)
            setLikes({ ...likes, viewModalState: newState });
        });
    }

    const likeTrip = () => {
        if (trip.likes.includes(user)) {
            API.unlikeTrip(trip._id)
            setLikes({ ...likes, like: false, status: "like" })
            console.log(likes.status)

        }
        else {
            API.likeTrip(trip._id, user)
            setLikes({ ...likes, like: true, status: "unlike" })
            console.log(likes.status)
        }
    }



    if (trip.been === "Yes") {
        return (
            <div>
                <bold>{trip.user} </bold> visited <bold>{trip.location}</bold>
                {!trip.likes.includes(user) ? (
                    <div>
                        <p> <small>Liked by {trip.likes.length} people</small></p >
                        <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> like</button><button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button>
                    </div>

                ) :
                    <div>
                        <p> <small>Liked by You and {trip.likes.length - 1} other people</small></p >
                        <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> like </button><button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button>
                    </div>
                }
                <PopupModal
                    closeModal={toggleView}
                    viewModalState={likes.viewModalState}
                    trip={trip}>
                </PopupModal>
            </div >
        )
    }
    else {
        return (
            <div>
                <bold>{trip.user} </bold> wants to vist <bold>{trip.location}</bold>
                <p> <small>Liked by {trip.likes.length} people</small></p>
                <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> like</button>
                {/* <button className="button is-small is-rounded" onClick={() => toggleView()}> See More</button> */}
                {/* <PopupModal
                    closeModal={toggleView}
                    viewModalState={likes.viewModalState}
                    trip={trip}>
                </PopupModal> */}
            </div>
        )
    }

    
}

export default Popup
