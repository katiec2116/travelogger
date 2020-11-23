import React from 'react';
import PropTypes from 'prop-types';



const ViewModal = ({ trip, closeModal, ViewModalState}) => {

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
                            {trip.images}
                            <div id="carousel-demo" className="carousel">
                                {/* {trip.image.length ? (
                                    <h1 className='columnHeader has-text-centered mt-6'>No Trips to Display</h1>
                                ) : (
                                        <div>
                                            {trip.image.map(image => (
                                                <div className="item-1">
                                                    <img src={image} />
                                                </div>
                                            ))}
                                        </div>
                                    )
                                } */}
                            </div>
                        </div>
                        
                       Display data here
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div>
        </div>
    );

}
ViewModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    ViewModalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}
export default ViewModal;
