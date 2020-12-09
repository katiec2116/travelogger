import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

function Details({ trip, show }) {

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
                        {!trip.images ? (
                            <div></div>
                        ) : (
                                <AwesomeSlider animation="cubeAnimation">
                                    {trip.images.map(image => (
                                        <div data-src={image} />
                                    ))}
                                </AwesomeSlider>
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

                </div>
            </div>
        </div>
    )
}

export default Details
