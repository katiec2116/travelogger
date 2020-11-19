import React, {useState} from 'react';
import PropTypes from 'prop-types';
import API from "../../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const plane = <FontAwesomeIcon icon={faPlane} />
const calendar = <FontAwesomeIcon icon={faCalendarAlt} />


const EditModal = ({ trip, closeModal, modalState, title }) => {
    console.log(trip.location)

    const [ data , setData ] = useState({
        location: trip.location,
        // date: trip.date,
        // been: trip.been,
        // notes: trip.notes,
        // lat: trip.lat,
        // long: trip.long,
        // images: trip.images
    });
    
    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        console.log(name)
        setData({...data,
            [name]: value
        });
        console.log(trip._id)
        
    };


    const submitEdit = (tripid) =>{
        console.log("this.state " + data.notes);
        API.updateTrip(tripid, data);
    };

    

    if (!modalState) {
        return null;
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">



                        <label className="label">Location</label>
                        <div className="field has-addons">
                            <div className="control has-icons-left is-expanded">
                                <input className="input" type="text" placeholder="Find a Location" name="location"
                                    value={trip} readOnly />
                                <span className="icon is-small is-left">
                                    {plane}
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">When?</label>
                            <div className="control has-icons-left">
                                <input className="input" type="date" name="date"
                                    defaultValue={trip.date} onChange={handleInputChange}/>
                                <span className="icon is-small is-left">
                                    {calendar}
                                </span>
                            </div>
                        </div>
                        <label className="label">Already Been?</label>
                        <div className="select mb-3">
                            <select name="been" onChange={handleInputChange}>
                                <option defaultValue>{trip.been}</option>
                                <option value='No'>No</option>
                                <option value='Yes'>Yes</option>
                            </select>
                        </div>
                        <div className="field">
                            <label className="label">Notes:</label>
                            <div className="control">
                                <textarea className="textarea" type="text" name="notes"
                                    defaultValue={trip.notes} onChange={handleInputChange}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div id="file-js-example" className="file is-info my-4">
                            <label className="file-label">
                                <input className="file-input" type="file" name="images" onChange={handleInputChange} defaultValue={trip.images}
                                />
                                <span className="file-cta">
                                    <span className="file-label">
                                        Upload Images
                                                                </span>
                                </span>
                            </label>
                        </div>

                    </div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={() => submitEdit(trip._id)} >Submit</a>
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div>
        </div>
    );

}
EditModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}
export default EditModal;
