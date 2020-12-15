import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";
// import Plane from "./icon.jpg";


function Comment({ trip, showDetails }) {

    const [user, setUser] = useContext(UserContext)
    const [comment, newComment] = useState({ user: user, tripId: trip._id, commentData: "" })



    const handleChange = e => {
        newComment({ user: user, tripId: trip._id, commentData: e.target.value })
        console.log(comment)
    }

    const handleSubmit = (e) => {
        console.log(comment)
        API.addComment(comment).then(res => console.log(comment)).then(() => {
            newComment({ ...comment, commentData: "" });

        })
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
            <div className="column mt-5 is-5">
                <div className="box">
                    <p style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "250%", textTransform: "uppercase" }}>
                        Comments                        </p>
                    <div>
                        <p className="title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}> {user} says</p>
                        <div className="field">
                            <div className="control">
                                <textarea className="textarea" type="text" name="comment" rows="1" value={comment.commentData}
                                    onChange={handleChange}>
                                </textarea>
                                <a onClick={() => { handleSubmit(); showDetails(trip); }}> trsy</a>

                            </div>
                        </div>
                    </div>
                </div>
                {/* {allComments.map(comment => (
                <p>{comment.user} said {comment.commentData}</p>
            ))} */}
            </div>
        </div>
    )
}

export default Comment
