import React, { useState, useContext, Component } from 'react';
import { UserContext } from "../../utils/UserContext";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Comment from "../Comment";
import DisplayComments from "../DisplayComments";
import Plane from "./icon.jpg";
import API from "../../utils/API";


class Details extends Component {
    constructor(props) {
        super(props);
        const user = localStorage.getItem('user');
        this.state = {
            user: user,
            tripId: props.trip._id,
            commentData: ""
        }

        // this.baseState = {...this.state, commentData:""}
    }

    resetForm = () => {
        this.setState({ ...this.state, commentData: "" })
    }

    componentDidMount() {
        if (this.props.details === true) {
            this.getComments();

        }
    }

    componentDidUpdate(prev, props) {
        // this.getComments()
        let prevLast = prev.comments[prev.comments.length - 1];
        let currentLast = this.props.comments[this.props.comments.length - 1];
        if (prevLast !== currentLast) {
            this.getComments()
        };
    }


    getComments = () => {
        API.getComments(this.props.trip._id).then(res => this.setState({ ...this.state, comments: res.data }))
    }

    handleChange = e => {
        const user = localStorage.getItem('user')
        this.setState({ user: user, tripId: this.props.trip._id, commentData: e.target.value })
    }

    handleSubmit = (e) => {
        API.addComment(this.state).then(res => console.log(this.state))
            .then(res => console.log(res))
            .then(
                setTimeout(() => {
                    this.resetForm()
                }, 100))
            .then(this.props.details(this.props.trip))

    }


    timeSince = (date) => {
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



    // useEffect(() => getAllComments(),[])

    render() {
        return (
            <div className={!this.props.show ? "hide" : "show columns"}>
                <div className="column is-7" style={{ color: "black" }}>
                    <div className="box mt-5">
                        <p style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "200%", textTransform: "uppercase" }}>
                            {this.props.trip.user}'S TRIP TO {this.props.trip.location}
                        </p>
                        <br />
                        <span style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%" }}>WHEN:</span> {this.props.trip.date}
                        <br />
                        <span style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%" }}>NOTES:</span> {this.props.trip.notes}
                        <div >
                            <br />
                            {this.props.trip.images && this.props.trip.images.length > 0 ? (
                                <AwesomeSlider animation="cubeAnimation">
                                    {this.props.trip.images.map(image => (
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
                        <p style={{ color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "200%", textTransform: "uppercase" }}>
                            Comments
                            </p>
                        <div>
                            <div className="columns">
                                <div className="column is-10">
                                    <textarea className="textarea commentArea" type="text" name="comment" rows="1" value={this.state.commentData}
                                        onChange={this.handleChange}>
                                    </textarea>
                                </div>
                                <div className="column pt-4">
                                    <a onClick={() => { this.handleSubmit(); }}><img className="planeBtn" src={Plane} alt="submit" /></a><br />
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.props.comments.map(comment => (
                                <div key={comment._id} className="comments">
                                    <p className="commentText" > {comment.commentData} <br /> <span className="userComment">{comment.user} </span><small className="time">{this.timeSince(comment.createdAt)} ago</small></p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details
