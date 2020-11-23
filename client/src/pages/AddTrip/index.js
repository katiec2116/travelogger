import React, { useState } from 'react'
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
        likes:"",
        images: []
    }

    

    onSubmit = e => {
        if(this.state.location === "" || !this.state.user){
            this.setState({
                user: localStorage.getItem('user'),
                location: "",
                date: "",
                been:"No",
                notes: "",
                lat: "",
                long: "",
                likes:"",
                images: []
            
        })}
        else{
        const span = document.getElementById('uploading');
        let images = span.getAttribute("filepath").split(",");;
        console.log(images);
        this.state.images = images;

        API.addTrip(this.state)
        .then(res => console.log(res))
        // .then(
        //     setTimeout(() =>{ this.setState({
        //     user: localStorage.getItem('user'),
        //     location: "",
        //     date: "",
        //     been:"No",
        //     notes: " ",
        //     lat: "",
        //     long: "",
        //     likes:"",
        //     images: []
        // }); 
        // }, 3000))
    }     
            
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
        console.log(this.state.images)


//     handleImages(event) {
//         event.preventDefault();
//         alert('A name was submitted: ' + this.state.value);
      }
    
    uploadImages=(e)=> {
        e.preventDefault();
        API.uploadPhoto().then(res => console.log(res));  

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
                        location={this.state.location}
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
