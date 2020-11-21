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
