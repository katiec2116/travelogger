import React from "react";
import Nav from "../../components/Nav2"
import AddForm from "../../components/AddForm"

function AddTrip() {
    return (
        <div>
            <Nav />
            <div className="columns">
                <AddForm />
            </div>
        </div>

    );
}

export default AddTrip;
