import React, { useContext, useState } from "react";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API"


function Comment(props) {

    const [user, setUser] = useContext(UserContext)
    console.log(user)
    console.log(props)
    const [comment, newComment] = useState({})
    


    const handleChange = e => {
        newComment({ user: user, tripId: props.trip._id, commentData: e.target.value })
        console.log(comment)
    }

    const handleSubmit = (e) => {
        console.log(comment)
        // e.preventDefault
        API.addComment(comment).then(res => console.log(res));
    }


    return (
        <div>
            <div>
                <p classNane="title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}> {user} SAYS</p>
                <div className="field">
                    <div className="control level">
                        <textarea className="textarea level-left" type="text" name="comment" rows="1" cols="5"
                            onChange={handleChange}> 
                        </textarea>
                        <button className ="level-right" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                <br/>
            </div>
            {/* {allComments.map(comment => (
                <p>{comment.user} said {comment.commentData}</p>
            ))} */}
            
        </div>
    )
}

export default Comment
