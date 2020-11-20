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
            .then(results => this.setState({ ...this.state, trips: results.data })).then(() => console.log(this.state.trips))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                  <div className="column is-9 py-6">
                      <ExploreMap long={-81} lat={27} all={this.state.trips} />
                  </div>
                  <div className="column is-3 py-6" style={{marginTop: "3rem"}}>
                      <aside className="menu" style={{border: "1px solid #75cff1"}}>
                          <ul className="menu-list">
                            <p class="menu-label" style={{borderBottom: "1px solid black", marginBottom: "0px", fontSize: "18px", padding: "5px 10px", color: "black", fontWeight: "500"}}>
                                Live Stream
                            </p>
                             {this.state.trips.map(trip => (
                                 
                                 <li style={{padding: "15px 10px", borderBottom: "1px solid black", color: "#000"}}>{trip.user} added {trip.location} to their trips!</li>
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