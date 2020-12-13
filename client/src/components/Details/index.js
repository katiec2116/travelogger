import React, { useState, useContext } from 'react';
import { UserContext } from "../../utils/UserContext";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Comment from "../Comment";
import DisplayComments from "../DisplayComments";
import Plane from "./icon.jpg";
import API from "../../utils/API";

function Details({ trip, show, comments, showDetails }) {
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
            showDetails(trip)
        });

    }

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


    if (trip.images) {
        console.log(trip.images.length)

    }
    // useEffect(() => getAllComments(),[])


    return (
        <div className={!show ? "hide" : "show columns"}>
            <div className="column is-7" style={{ color: "black" }}>
                <div className="box mt-5">
                    <p style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "250%", textTransform: "uppercase" }}>
                        {trip.user}'S TRIP TO {trip.location}
                    </p>
                    <br />
                    <span style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%" }}>WHEN:</span> {trip.date}
                    <br />
                    <span style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%" }}>NOTES:</span> {trip.notes}
                    <div >
                        <br />
                        {trip.images && trip.images.length > 0 ? (
                            <AwesomeSlider animation="cubeAnimation">
                                {trip.images.map(image => (
                                    <div key={image} data-src={image} />
                                ))}
                            </AwesomeSlider>
                        ) : (
                                null
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="column mt-5 is-5">
                <div className="box">
                    <p style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "250%", textTransform: "uppercase" }}>
                        Comments
                            </p>
                    <div>
                        <p className="title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}> {user} says</p>
                        <div className="field">
                            <div className="control">
                                <textarea className="textarea" type="text" name="comment" rows="1" defaultValue={comment.commentData}
                                    onChange={handleChange}>
                                </textarea>
                                <a onClick={handleSubmit}><img className="planeBtn" src={Plane} alt="submit" /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {comments.map(comment => (
                            <div key={comment._id} className="comments">
                                <p className="commentText" > {comment.commentData} <br /> <span className="userComment">{comment.user} </span><small className="time">{timeSince(comment.createdAt)} ago</small></p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
