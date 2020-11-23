import React, { useState } from "react";
import Alert from "../Alert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />
let imagePath;


function uploadImages(e){
    e.preventDefault()
    const span = document.getElementById('uploading');
    span.innerText = "uploading...";
    const data = new FormData();
    const user = localStorage.getItem('user')

    data.append('photo', e.target.photo.files[0])
    data.append('user', user)

    const options = {
        method: 'POST',
        body: data
      };

    fetch('/api/photos/upload', options).then(response => response.json())
    .then(result => {
      console.log(result.filename);
      imagePath = result.filename;
      span.innerText = "Upload Successful!"
      span.setAttribute('filepath', imagePath)
    })
}
  
function AddForm(props) {

    const [alertBox, setAlert] = useState(false)

    const alert =()=>{
        console.log("hi")
        setAlert(true)
            setTimeout(function() { setAlert(false) }, 3000)
    }

    return (
        <div className="box mt-6">
            <div className="content">

            <label className="label">Location</label>
                <div className="field has-addons">
                    <div className="control has-icons-left is-expanded">
                        <input className="input" type="text" placeholder="Find a Location" name="location" style={{textTransform: "capitalize"}} onChange={props.handleLocation}
                        value={props.location}/>
                        <span className="icon is-small is-left">
                            {plane}
                        </span>
                    </div>
                    
                    <div className="control">
                        <button className="button is-info" onClick={props.submitLocation}>
                            Search
                        </button>
                    </div>
                </div>

                <div className="field">
                    <label className="label">When?</label>
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
                <label className="label">Already Been?</label>
                <div className="select mb-3">
                    <select name="been" onChange={props.handleInputChange}>
                        <option value="No" defaultValue>No</option>
                        <option value='Yes'>Yes</option>
                    </select>
                </div>

                <div className="field">
                    <label className="label">Notes:</label>
                    <div className="control">
                        <textarea className="textarea" type="text" name="notes"
                            onChange={props.handleInputChange}
                            value={props.notes}
                        >
                        </textarea>
                    </div>
                </div>
                <form onSubmit={uploadImages} id="file-js" method="POST" action="" className="file is-info my-4" encType="multipart/form-data">
                    <label className="file-label">
                        <input className="file-input" type="file" name="photo"
                            
                        />
                        <span className="file-cta">
                            <span className="file-label">
                                Add Images
                                    </span>
                        </span>
                    </label>
                    <button type="submit" className="btn" >Upload</button>
                    <span id="uploading"></span>
                </form>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button" onClick={() =>{props.onSubmit(); alert()}}>Add</button>
                    </div>
                    <div className="control">
                        <button className="button is-light">Cancel</button>
                    </div>
                </div>
            </div>
            <Alert location = {props.location} alert={alertBox} />
        </div>
    );
}


export default AddForm;
