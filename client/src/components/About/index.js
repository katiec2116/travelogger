import React, { useContext, useState, useEffect } from 'react';
import placeholder from "./user.png"
import pic from "./profile.png"
import API from "../../utils/API"
import { UserContext } from "../../utils/UserContext"
let imagePath = [];


function uploadImages(e) {
    e.preventDefault()
    const span = document.getElementById('uploading');
    span.innerText = "uploading profile picture...";
    const data = new FormData();
    const user = localStorage.getItem('user')
    console.log(e.target.photo.files);
    const images = e.target.photo.files;
    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
        data.append('photos', images[i])
    }
    data.append('user', user)
    console.log(data)

    const options = {
        method: 'POST',
        body: data
    };

    fetch('/api/photos/upload/profile', options).then(response => response.json())
        .then(result => {
            console.log(result.filename);
            imagePath.push(result.filename);
            span.innerText = "Upload Successful!"
            span.setAttribute('filepath', imagePath)
        })
}

function About() {

    const [user, dispatch] = useContext(UserContext)
    const [userdata, setData] = useState({});
    const [trips, setTrips] = useState([])

    useEffect(() => {
        console.log(user)
        const userName = localStorage.getItem("user")
        console.log(userName)
        API.getUserData(user)
            .then(results => (setData(results.data)))
        API.getMyTrips(userName)
            .then(results => (setTrips(results.data)))
            .then(console.log(trips))
    }, [])

    console.log(userdata)
    console.log(trips)
    // user.image = pic
    return (
        <div>
            <div className="container1 pt-6 box profile">
                <div className="has-text-centered">
                    <img className="profilePic pb-6 " alt="profile" src={userdata.image || placeholder} />
                    <form  onSubmit={uploadImages} id="file-js" method="POST" action="" className="file is-small my-4" encType="multipart/form-data">
                    <div style={{marginRight:"auto", marginLeft:"auto"}}>
                        <label className="file-label">
                            <input className="file-input" type="file" name="photo"
                                multiple />
                            <span className="file-cta">
                                <span className="file-label p-0">
                                    Choose a Picture
                                    </span>
                            </span>
                        </label>
                        <button type="submit" className="button ml-2 is-small">Upload</button>
                        <span id="uploading"></span>
                        </div>
                    </form>

                    <h1 className="username p-4"> {userdata.username || "TEST"}</h1>
                    {/* <button className="button is-link mr-2">Follow</button><button className="button is-link is-outlined">Message</button> */}
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Email</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="text" placeholder="email" name="location"
                                            value={userdata.email} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-label">
                                <label className="label">Birthday</label>
                            </div>
                            <div className="field-body">
                                <div className="control">
                                    <input className="input" type="date" name="date"
                                        value={userdata.dob} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <p className="placeList">Places Visited</p>
                            <ul className="field">
                                {trips.map(trip => <li key={trip._id}>{trip.location}</li>)}
                            </ul>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="field has-text-centered">
                        <div className="control">
                            {/* <button className="button" onClick={() =>{props.onSubmit(); alert()}}>Add</button> */}
                        </div>
                        <div className="control">
                            <button className="button is-success">Save Changes</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About
