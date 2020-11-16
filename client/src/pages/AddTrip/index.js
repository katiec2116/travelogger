import React, { useContext } from 'react'
import AddForm from "../../components/AddForm"
import { UserContext } from "../../utils/UserContext"
import Auth from "../../utils/Auth"


function AddTrip() {
    const [ user, setUser ] = useContext(UserContext)
    console.log(user)


    return (
        <div>
            <div className="columns">
                <AddForm />
            </div>
        </div>

    );

}

export default AddTrip;
