import React from "react";
import API from "../../utils/API"


let trips = [];
class Explore extends React.Component {

    state = {
        trips: []
    }

    
    
    componentDidMount() {
		fetch('api/users/getall', {
			credentials: 'include'
		})
			.then((res) => {
				return res.json(res)
			})
			.then(data => {                
                for (let i = 0; i < data.length; i++) {  
                    if (data[i].trips.length > 0) {                  
                    trips.push(data[i])
                    }
                    // console.log(data[i].trips)
                }
			}).then(() => {
                this.state.trips = trips.flat()
                console.log(this.state.trips)
            })
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}

    render(){
        return (
            <div className="container">
            <div className="columns">
                <div className="column is-9 py-6">
                    Map goes here
                </div>
                <div className="column is-3 py-6">
                <aside className="menu" style={{border: '1px solid black'}}>
                    <ul className="menu-list">
                        {this.state.trips.map(trip => (
                            <li key={trip._id}>{trip.username} added: <span>{trip.trips.date}</span>  to their trips!</li>
                        ))}
                    </ul>
                </aside>
                </div>
            </div>
        </div>
        );
    }
}

export default Explore;