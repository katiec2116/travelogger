import React, { useState } from "react";
import Alert from "../Alert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />
function AddForm(props) {

    const [alertBox, setAlert] = useState(false)

    const alert =()=>{
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
                        <option value="No" selected>No</option>
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
                <div id="file-js-example" method="POST" action="/upload-multiple-images" enctype="multipart/form-data"className="file is-info my-4">
                    <label className="file-label">
                        <input className="file-input" type="file" name="images"
                            onChange={props.handleImages}
                        />
                        <span className="file-cta">
                            <span className="file-label">
                                Upload Images
                                    </span>
                        </span>
                    </label>
                </div>

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
