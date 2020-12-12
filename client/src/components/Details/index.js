import React, { useState, useEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Comment from "../Comment";
import DisplayComments from "../DisplayComments"
import API from "../../utils/API"

function Details({ trip, show, comments }) {
    // const [allComments, updateComments] = useState([])

    // const getAllComments = () => {
    //     API.getComments(trip._id).then(res => updateComments(res.data))
    // }


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
                    <Comment trip={trip} />
                    <DisplayComments comments={comments}/>
                </div>
            </div>
        </div>
    )
}

export default Details
