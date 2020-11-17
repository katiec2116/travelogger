import React, { useEffect, useContext } from 'react'
import Explore from "../Explore"
import { UserContext } from "../../utils/UserContext";


function MyTrips() {

    const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/trips', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
                console.log("this is data");
				console.log(data.trips);
	
                return console.log("done");
			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);
   
    return (
        <div>
            <p>hello world</p>
        </div>

    );
}

export default MyTrips;