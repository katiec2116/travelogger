import React, { useContext } from 'react'
import AddForm from "../../components/AddForm"
import API from "../../utils/API"
import { UserContext } from "../../utils/UserContext"


class AddTrip extends React.Component {

    state = {
            location: "",
            date: "",
            notes: "",
            lat: "",
            long: "",
            images:[]
        }
    

     onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
       ;
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
        this.mapQuest(e.target.value);
        const oldImages = [this.state.images];
        const newImages = oldImages.push(e.target.value);
        this.setState({ ...this.state, images: [newImages] });
        }

    handleLocation = e => {
        this.mapQuest(e.target.value);
        
    };

    mapQuest = (location) =>{
        API.location(location)
        .then(res => this.setState(
            {...this.state, lat:(res.data.results[0].locations[0].displayLatLng.lat), 
            long:(res.data.results[0].locations[0].displayLatLng.lng), location:location
            }))
console.log(this.state)
    }


    render(){
    return (
        <div>
            <div className="columns">
                <AddForm 
                onSubmit={this.onSubmit} 
                handleInputChange={this.handleInputChange} 
                handleLocation={this.handleLocation} 
                handleImages={this.handleImages}/>
            </div>
        </div>

    );

}}

export default AddTrip;
