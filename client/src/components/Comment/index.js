import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API"


function Comment(props) {
    const [user, setUser] = useContext(UserContext)

    console.log(user)
    console.log(props)
    const [comment, newComment] = useState({})
    const [allComments, updateComments] = useState([])

    const getAllComments = () => {
        API.getComments(props.trip._id).then(res => console.log(res))
    }

    if (props.trip.comments){
        console.log(props.trip.comments.length)
        getAllComments()
    }


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
                <p classNmae="title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}> {user} says</p>
                <div className="field">
                    <div className="control">
                        <textarea className="textarea" type="text" name="notes"
                            onChange={handleChange}
                        >
                        </textarea>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Comment
