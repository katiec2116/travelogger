import React, { useState } from 'react';
import API from "../../utils/API"

function Popup({trip}) {

    const [likes, setLikes] = useState(
        {
        status: "like",
        like: false
        }
        )

    const likeTrip=() =>{
        if (likes.like === false){
            API.likeTrip(trip._id)
            setLikes({like: true, status: "unlike" })
        }
        else {
            API.unlikeTrip(trip._id)
            setLikes({like: true, status: "like" })
        }
    }

    if (trip.been === "Yes"){
    return (
        <div>
            <bold>{trip.user} </bold> visited <bold>{trip.location}</bold>
           <p> <small>Liked by {trip.likes} people</small></p>
            <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> {likes.status}</button>
        </div>
    )
    }
    else {
        return (
            <div>
                <bold>{trip.user} </bold> wants to vist <bold>{trip.location}</bold>
               <p> <small>Liked by {trip.likes} people</small></p>
               <button className="button is-small is-rounded" onClick={() => likeTrip(!likes.like)}> {likes.status}</button>
            </div>
        )
    }
}

export default Popup
