import React from 'react'
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div className="has-text-centered pt-6">
            <p style={{fontSize:'40px',fontFamily: "'Roboto Condensed', sans-serif", color: "whitesmoke"}}>SORRY! WE CAN'T FIND THAT PAGE</p>
            <span style={{fontSize:'170px'}}>&#129488;</span>
            <br/>
            <div style={{fontSize:'40px',fontFamily: "'Roboto Condensed', sans-serif", color: "whitesmoke"}}>
            CLICK <Link to="/"> HERE</Link> TO GO HOME
            </div>
            
        </div>
    )
}

export default NoMatch
