import React from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const ViewModal = ({ trip, closeModal, ViewModalState }) => {

    if (!ViewModalState) {
        return null;
    }



    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title location" >{trip.location}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        <div className="container">
                            <div >
                                {!trip.images.length ? (
                                    <h1 className='columnHeader has-text-centered mt-6'>No Trips to Display</h1>
                                ) : (
                                        <AwesomeSlider>
                                            {trip.images.map(image => (
                                                <div data-src={image}  width="640" height="310"/>
                                            ))}
                                        </AwesomeSlider>
                                    )
                                }
                            </div>
                        </div>

        </div>
                </section >
                <footer className="modal-card-foot">
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div >
        </div >
    );

}
ViewModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    ViewModalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}
export default ViewModal;
