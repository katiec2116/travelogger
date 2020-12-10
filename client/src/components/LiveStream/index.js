import React from 'react'

function LiveStream({ trip }) {


    const timeSince = (date) => {
        var aDay = 24 * 60 * 60 * 1000;
        var newDate = (Date.parse(date))
        var seconds = Math.floor((new Date(Date.now()) - newDate) / 1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
    return (
        <div className = "box" style={{padding:"10px"}}>

            {trip.been === 'Yes' ? <li key={trip._id}><strong>{trip.user}</strong> added {trip.location} to their trips! <br/><small className ="time">{timeSince(trip.createdAt)} ago</small></li>
                : <li key={trip._id} ><strong>{trip.user}</strong> wants to visit {trip.location}! 
                <br/><small className ="time">{timeSince(trip.createdAt)} ago</small></li>
            }
        </div>
    )
}

export default LiveStream
