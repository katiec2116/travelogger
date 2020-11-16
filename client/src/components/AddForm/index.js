import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import API from "../../utils/API";

const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />
function AddForm() {

    const [formData, setFormData] = useState(
        {
            location: "",
            date: "",
            notes: "",
            images:[]
        }
    )

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
       ;
    };

    


    return (
        <div className="column is-5 ml-5">
            <div className="box mt-6">
                <div className="content">

                    <div className="field">
                        <label className="label">Where to?</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text"
                                onChange={e => {
                                    setFormData({ ...formData, location: e.target.value });
                                    console.log(e.target.value)
                                   }} />
                            <span className="icon is-small is-left">
                                {plane}
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">When?</label>
                        <div className="control has-icons-left">
                            <input className="input" type="date"
                                onChange={e => {
                                    setFormData({ ...formData, date: e.target.value });
                                    console.log(formData.date)
                                }} />
                                <span className="icon is-small is-left">
                                {calendar}
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Notes:</label>
                        <div className="control">
                            <textarea className="textarea" type="text"
                                onChange={e => {
                                    setFormData({ ...formData, notes: e.target.value });
                                    console.log(formData.notes)
                                }} >
                            </textarea>
                        </div>
                    </div>
                    <div id="file-js-example" className="file is-info my-4">
                        <label className="file-label">
                            <input className="file-input" type="file" name="images"
                            onChange={e => {
                                const oldImages = [formData.images];
                                oldImages.push(e.target.value);
                                console.log(oldImages)
                                setFormData({ ...formData, images: e.target.value });
                                // console.log(formData.images)
                            }} />
                                <span className="file-cta">
                                    <span className="file-label">
                                        Upload Images
                                    </span>
                                </span>
                        </label>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button" onClick={onSubmit}>Add</button>
                            </div>
                            <div className="control">
                                <button className="button is-light">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
}

export default AddForm;
