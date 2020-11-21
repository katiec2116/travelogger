import React from "react";
import API from "../../utils/API"
import ExploreMap from "../../components/ExploreMap"

class Explore extends React.Component {

    state = {
        trips: [],
    }


    componentDidMount() {
        const user = localStorage.getItem('user')
        API.getAllTrips(user)
            .then(results => console.log(results))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-9 py-6">
                        <ExploreMap long={-81} lat={27} all={this.state.trips} />
                    </div>
                    <div className="column is-3 py-6">
                        <aside className="menu" style={{ border: '1px solid black' }}>
                            <ul className="menu-list">

                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;