import React from "react";
import ExploreMap from "../../components/ExploreMap"
import API from "../../utils/API"



class Explore extends React.Component {

    state = {
        users: []
    }
    
    // componentDidMount() {
    //     API.getUsers()
    //         .then(results => this.setState({ users: results.data.trips }))
    //         .catch(err => console.log(err))
    // }


    render() {
        return (
            <div>
                <div className="columns">
                <div className="column is-9 py-6">
                <ExploreMap long={-81} lat={27} all={this.state.users} />

            </div>
                <div className="column is-3 py-6">
                    live stream
                </div>
            </div>
        </div> 
        )
    }
}

export default Explore;