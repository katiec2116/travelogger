import React from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';



const PopupModal = ({ trip, closeModal, viewModalState }) => {
    console.log(viewModalState)

    if (!viewModalState) {
        return null;
    }

    return (
        <div className="modal is-active popupModal">
            <div className="modal-background popupBackground" onClick={closeModal} />
            <div className="modal-card popupCard">
                <header className="modal-card-head" style={{height:"30px"}}>
                    <p className="modal-card-title location" >{trip.location}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        <div >
                            {!trip.images.length ? (
                                <h1 className='columnHeader has-text-centered mt-6'>No Trips to Display</h1>
                            ) : (
                                    <AwesomeSlider animation="cubeAnimation">
                                        {trip.images.map(image => (
                                            <div data-src={image}  />
                                        ))}
                                    </AwesomeSlider>
                                )
                            }
                        </div>
                    </div>
                </section>

                <button className="button" onClick={closeModal} style={{height:"30px"}}>Close</button>

            </div>
        </div>
    );

}
PopupModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    ViewModalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}
export default PopupModal;
