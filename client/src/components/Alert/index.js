import React from 'react'

function Alert(props) {
    console.log(props)
    if (!props.alertStatus) {
        return null;
    }

    return (
        <div>
            <div class="notification is-success is-light">
                <button class="delete"></button>
                    Your trip to {props.location} has been added!
            </div>
        </div>
    )
}

export default Alert    
