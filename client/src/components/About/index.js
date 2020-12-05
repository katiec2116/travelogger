import React, { useContext, useState, useEffect } from 'react';
import placeholder from "./user.png"
import pic from "./profile.png"
import API from "../../utils/API"
import { UserContext } from "../../utils/UserContext"
let imagePath = [];

function uploadImages(e) {
    e.preventDefault()
    const span = document.getElementById('uploading');
    span.innerText = "uploading...";
    const data = new FormData();
    const user = localStorage.getItem('user')
    console.log(e.target.photo.files);
    const images = e.target.photo.files;
    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
        data.append('photos', images[i])
    }
    data.append('user', user)

    const options = {
        method: 'POST',
        body: data
    };

    fetch('/api/photos/upload', options).then(response => response.json())
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
    const [trips, setTrips] = useState({})

    useEffect(() => {
        console.log(user)
        API.getUserData(user)
            .then(results => (setData(results.data)))
            .then(API.getMyTrips(localStorage.getItem("user")))
            .then(results => (setTrips(results)))
    }, [])


    console.log(userdata)
    console.log(trips)
    // user.image = pic
    return (
        <div>
            <div className="container1 mt-6">
                <div className="columns ">
                    <div className="column is-4 has-text-centered">
                        <img className="profilePic pb-6 " alt="profile" src={userdata.image || placeholder} />
                        <form onSubmit={uploadImages} id="file-js" method="POST" action="" className="file is-small my-4" encType="multipart/form-data">
                            <label className="file-label">
                                <input className="file-input" type="file" name="photo"
                                    multiple
                                />
                                <span className="file-cta">
                                    <span className="file-label p-0">
                                        Upload a Picture!
                                    </span>
                                </span>
                            </label>
                            <button type="submit" className="button ml-2 is-small" >Upload</button>
                            <span id="uploading"></span>
                        </form>
                        <h1 className="username"> {userdata.username || "TEST"}</h1>
                        <button className="button is-link mr-2">Follow</button><button className="button is-link is-outlined">Message</button>
                    </div>
                    <div className="column is-8">
                        <label className="label">Email</label>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="email" name="location"
                                    value={userdata.email}
                                />
                            </div>

                        </div>
                        <div className="field">
                            <label className="label">Birthday</label>
                            <div className="control">
                                <input className="input" type="date" name="date"
                                    value={userdata.dob}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Places Visited:</label>
                            <div className="control">
                                <textarea className="textarea" type="text" name="notes"
                                    value={userdata.trips} readOnly>
                                </textarea>
                            </div>
                        </div>
                        

                        <div className="field is-grouped">
                            <div className="control">
                                {/* <button className="button" onClick={() =>{props.onSubmit(); alert()}}>Add</button> */}
                            </div>
                            <div className="control">
                                <button className="button is-success">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
