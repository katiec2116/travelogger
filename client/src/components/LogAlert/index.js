import React from 'react'

function LogAlert(props) {
    console.log(props.alert)
    if (!props.alert) {
        return null;
    }

    return (
        <div>
            <div className="notification is-danger">
                    Please make sure your username and password are correct!
            </div>
        </div>
    )
}

export default LogAlert    
