import React from 'react';

function DisplayComments({ comments }) {
    console.log("HERE")
    

    return (
        <div>
            {comments.map(comment => (
            <p key={comment._id}>{comment.user} said {comment.commentData}</p>
            ))}
            
        </div>
    )
}

export default DisplayComments
