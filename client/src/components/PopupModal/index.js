import React from 'react';
import PropTypes from 'prop-types';



const PopupModal = ({ trip, closeModal, ViewModalState}) => {

    if (!ViewModalState) {
        return null;
    }

    return (
        <div className="modal is-active popupModal">
            <div className="modal-background popupBackground" onClick={closeModal} />
            <div className="modal-card popupCard">
                <header className="modal-card-head">
                    <p className="modal-card-title location" >{trip.location}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        
                        
                       Display data here
                    </div>
                </section>
                
                    <a className="button" onClick={closeModal}>Close</a>
                
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
