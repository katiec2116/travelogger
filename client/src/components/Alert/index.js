import React from 'react'

function Alert(props) {
    if (!props.alert) {
        return null;
    }

    return (
        <div>
            <div className="notification is-success is-light">
                <button className="delete"></button>
                    Your trip to {props.location} has been added!
            </div>
        </div>
    )
}

export default Alert    
