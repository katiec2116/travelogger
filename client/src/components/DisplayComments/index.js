import React from 'react';

function DisplayComments({ comments }) {
    console.log("HERE")
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
        <div>
            {comments.map(comment => (
                <div key={comment._id} className = "comments">
            <p className="commentText" > {comment.commentData} <br/> <span className = "userComment">{comment.user} </span><small className ="time">{timeSince(comment.createdAt)} ago</small></p>
            </div>
            ))}
            
        </div>
    )
}

export default DisplayComments
