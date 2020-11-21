import React from 'react'
import AddForm from "../../components/AddForm"
import API from "../../utils/API"
import Yelp from "../../components/Yelp"
import Map from "../../components/Map"



class AddTrip extends React.Component {

    state = {
        user: localStorage.getItem('user'),
        location: "",
        date: "",
        been:"No",
        notes: "",
        lat: "",
        long: "",
        images: []
    }

    onSubmit = e => {
        e.preventDefault();
        API.addTrip(this.state)
        .then(res => console.log(res))
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        
    };
    handleImages = e => {
        const images = this.state.images;
        images.push(e.target.value);
        this.setState({ ...this.state, images: images });
    }

    handleLocation = e => {
        this.mapQuest(e.target.value);
        this.setState({
            ...this.state, location: e.target.value
        });
    };
    


    mapQuest = (location) => {
        if (!location || location === " "){
            this.setState({...this.state, lat:0, long:0})
        }
        else {
        API.location(location)
            .then(res => this.setState(
                {
                    ...this.state, lat: (res.data.results[0].locations[0].latLng.lat),
                    long: (res.data.results[0].locations[0].latLng.lng)
                }))
            }
    }


    render(){
        return (
            <div>
                <div className="columns" style={{ height: "100%" }}>
                    <div className="column is-two-fifths">
                    <AddForm
                        onSubmit={this.onSubmit}
                        handleInputChange={this.handleInputChange}
                        handleLocation={this.handleLocation}
                        handleImages={this.handleImages}/>
                    </div>
                    <div className="column scroll is-three-fifths">
                        <Map lat={this.state.lat} long={this.state.long}/>
                        <Yelp data={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTrip;
