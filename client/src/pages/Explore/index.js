import React from 'react';
import API from "../../utils/API"
import ExploreMap from "../../components/ExploreMap"
import LiveStream from "../../components/LiveStream"
import Details from "../../components/Details"



class Explore extends React.Component {

    state = {
        trips: [],
        details: false,
        selectedTrip:{},
        comments: []

    }
    componentDidMount() {
        const user = localStorage.getItem('user')

        API.getAllTrips(user).then(results => {
            this.setState({trips:results.data})}).then(() => (this.state.trips));

        this.timer = setInterval(() => API.getAllTrips(user).then(results => {
            this.setState({trips:results.data})}).then(() => console.log(this.state.trips)),
            10000,
        );
    }
        componentWillUnmount() {
            clearInterval(this.timer);
        }

        showDetails(selectedTrip){
            API.getComments(selectedTrip._id).then(res => this.setState({ ...this.state, details: true, selectedTrip: selectedTrip, comments:res.data }
            ));
        }

        closeDetails(){
            this.setState({...this.state, details:false})
        }

    render() {
        return (
            <div className="container1">
                <div className="columns">
                    <div className="column is-9 mt-6">
                        <ExploreMap long={-81} lat={27} all={this.state.trips} showDetails={this.showDetails.bind(this)} onClick={this.closeDetails} />
                        <Details show={this.state.details} trip={this.state.selectedTrip} comments={this.state.comments} showDetails={this.state.showDetails}/>
                    </div>
                    <div className="column is-3 mt-6">
                        <aside>
                            <ul className="menu-list">
                            <p className="menu-label" style={{color: "whitesmoke", fontFamily: "'Roboto Condensed', sans-serif", fontSize: "150%"}}>
                                Live Stream
                            </p>
                            {this.state.trips.map(function(trip, i){
                               return  <LiveStream key={trip._id} trip={trip}/>
                             })}
                          </ul>
                      </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;