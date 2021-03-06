import React, { useState } from "react";
import Alert from "../Alert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />


function uploadImages(e){
    e.preventDefault()
    let imagePath = [];
    const span = document.getElementById('uploading');
    span.innerText = "uploading...";
    const data = new FormData();
    const user = localStorage.getItem('user')
    const images = e.target.photo.files;
    for (let i = 0; i < images.length; i++) {
        data.append('photos', images[i])
    }
    data.append('user', user)
    const options = {
        method: 'POST',
        body: data
      };

    fetch('/api/photos/upload', options).then(response => response.json())
    .then(result => {
      imagePath.push(result.filename);
      span.innerText = "Upload Successful!"
      span.setAttribute('filepath', imagePath)
    })
}
  
function AddForm(props) {

    const [alertBox, setAlert] = useState(false)

    const alert =()=>{
        setAlert(true)
            setTimeout(function() { setAlert(false) }, 3000)
    }

    return (
        <div className="box mt-6">
            <div className="content">
            <p className="menu-label" style={{color: "black", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%"}}>
                                ADD A TRIP
                            </p>
            <label className="label" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>LOCATION</label>
                <div className="field">
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="Find a Location" name="location" style={{textTransform: "capitalize"}} onChange={props.handleLocation}
                        value={props.location}/>
                        <span className="icon is-small is-left">
                            {plane}
                        </span>
                    </div>

                </div>

                <div className="field">
                    <label className="label"style={{fontFamily: "'Roboto Condensed', sans-serif"}}>WHEN?</label>
                    <div className="control has-icons-left">
                        <input className="input" type="date" name="date"
                            onChange={props.handleInputChange}
                            value={props.date}
                        />
                        <span className="icon is-small is-left">
                            {calendar}
                        </span>
                    </div>
                </div>
                <label className="label" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>ALREADY BEEN?</label>
                <div className="select mb-3">
                    <select name="been" onChange={props.handleInputChange} defaultValue = "No" >No
                        <option value="No"> No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                <div className="field">
                    <label className="label" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>NOTES:</label>
                    <div className="control">
                        <textarea className="textarea" type="text" name="notes"
                            onChange={props.handleInputChange}
                            value={props.notes}>
                        </textarea>
                    </div>
                </div>
                <form onSubmit={uploadImages} id="file-js" method="POST" action="" className="file is-info my-4" encType="multipart/form-data">
                    <label className="file-label">
                        <input className="file-input" type="file" name="photo"
                        multiple
                        />
                        <span className="file-cta">
                            <span className="file-label p-0" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>
                                SELECT IMAGES
                                    </span>
                        </span>
                    </label>
                    <button type="submit" className="button ml-2 is-small" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>UPLOAD</button>
                    <span id="uploading"></span>
                </form>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button" style={{fontFamily: "'Roboto Condensed', sans-serif"}} onClick={() =>{props.onSubmit(); alert()}}>ADD</button>
                    </div>
                </div>
            </div>
            <Alert location = {props.location} alert={alertBox} />
        </div>
    );
}


export default AddForm;
