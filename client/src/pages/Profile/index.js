import React, {useContext, useState, useEffect} from 'react'
import Menu from "../../components/Menu";
import About from "../../components/About"
import {UserContext} from "../../utils/UserContext"


function Profile() {

    const [user, dispatch] = useContext(UserContext)
    console.log(user)



    return (
        <div className="container1">
            <div className="columns">
                <div className="column is-2 mt-6">
                    <Menu />
                </div>

                <div className="column is-9 mt-6">
                    <About />
                </div>
            </div>

        </div>
    )
}

export default Profile
