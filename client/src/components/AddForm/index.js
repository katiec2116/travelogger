import React, { useState } from "react";
function AddForm() {

    const [formData, setFormData] = useState(
        {
            location: "",
            date: "",
            notes: ""
        }
    )

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
    };


    return (
        <div className="column is-5 ml-5">
            <div className="box mt-6">
                <div className="content">

                    <div className="field">
                        <label className="label">Where to?</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text"
                                onChange={e => {
                                    setFormData({ ...formData, location: e.target.value });
                                    console.log(formData.location)
                                }} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-plane"></i>
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
                                <i className="fas fa-clock"></i>
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
                    <div className="file mb-3 is-link">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume"/>
                                <span className="file-cta">
                                    <span className="file-label">
                                        Choose a file…
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
