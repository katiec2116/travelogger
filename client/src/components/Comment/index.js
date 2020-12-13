import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";
// import Plane from "./icon.jpg";


function Comment(props) {

    const [user, setUser] = useContext(UserContext)
    console.log(user)
    console.log(props)
    const [comment, newComment] = useState({ user: user, tripId: props.trip._id, commentData: "" })



    const handleChange = e => {
        newComment({ user: user, tripId: props.trip._id, commentData: e.target.value })
        console.log(comment)
    }

    const handleSubmit = (e) => {
        console.log(comment)
        API.addComment(comment).then(res => console.log(comment))
        
    }

    const reset = () => {
        newComment({ ...comment, commentData: "" })
        console.log(comment.commentData)
    }


    useEffect(() => {
        function reset() {
            newComment({ ...comment, commentData: "" });
        }

        reset()


    }, [comment.commentData]);


    return (
        <div>
            <div>
                <p className="title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}> {user} says</p>
                <div className="field">
                    <div className="control">
                        <textarea className="textarea" type="text" name="comment" rows="1" defaultValue={comment.commentData}
                            onChange={handleChange}>
                        </textarea>
                        <a onClick={handleSubmit}>test </a>
                    </div>
                </div>
            </div>
            {/* {allComments.map(comment => (
                <p>{comment.user} said {comment.commentData}</p>
            ))} */}

        </div>
    )
}

export default Comment
