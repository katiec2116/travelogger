import React from 'react'
import AddForm from "../../components/AddForm"
import API from "../../utils/API"
import Map from "../../components/Map"
import Yelp from "../../components/Yelp"

class AddTrip extends React.Component {

    state = {
        location: "",
        date: "",
        been:"",
        notes: "",
        lat: "",
        long: "",
        images: []
    }

    onSubmit = e => {
        e.preventDefault();
        const id = localStorage.getItem('user')
        console.log(id)
        console.log("this.state " + this.state)
        API.addTrip(this.state, id);
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        console.log(name)
        this.setState({
            [name]: value
        });
    };
    handleImages = e => {
        const images = this.state.images;
        images.push(e.target.value);
        this.setState({ ...this.state, images: images });
        console.log(e.target.value)
        console.log(this.state)
    }

    handleLocation = e => {
        this.mapQuest(e.target.value);
        console.log(e.target.value)

    };

    mapQuest = (location) => {
        API.location(location)
            .then(res => this.setState(
                {
                    ...this.state, lat: (res.data.results[0].locations[0].latLng.lat),
                    long: (res.data.results[0].locations[0].latLng.lng), location: location
                }))
    }


    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-two-fifths">
                        <AddForm
                            onSubmit={this.onSubmit}
                            handleInputChange={this.handleInputChange}
                            handleLocation={this.handleLocation}
                            handleImages={this.handleImages} />
                    </div>
                    <div className="column is-three-fifth">
                        <Map />
                        <Yelp data={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTrip;
