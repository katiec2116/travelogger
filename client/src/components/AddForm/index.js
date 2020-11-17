import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />
function AddForm(props) {


    return (
        <div className="column is-5 ml-5">
            <div className="box mt-6">
                <div className="content">

                    <div className="field">
                        <label className="label">Where to?</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" name="location"
                                onChange={props.handleLocation} />
                            <span className="icon is-small is-left">
                                {plane}
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">When?</label>
                        <div className="control has-icons-left">
                            <input className="input" type="date" name="date"
                                onChange={props.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                {calendar}
                            </span>
                        </div>
                    </div>
                    <label className="label">Already Been?</label>
                    <div className="select">
                        <select name="been" onChange={props.handleInputChange}>
                            <option value='no'>No</option>
                            <option value='yes'>Yes</option>
                        </select>
                        </div>

                    <div className="field">
                        <label className="label">Notes:</label>
                        <div className="control">
                            <textarea className="textarea" type="text" name="notes"
                                onChange={props.handleInputChange}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div id="file-js-example" className="file is-info my-4">
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
                            <button className="button" onClick={props.onSubmit}>Add</button>
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
