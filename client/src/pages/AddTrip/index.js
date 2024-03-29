import React from 'react';
import AddForm from "../../components/AddForm";
import API from "../../utils/API";
import Yelp from "../../components/Yelp";
import Map from "../../components/Map";
import NoMatch from "../NoMatch";
import Auth from "../../utils/Auth";


class AddTrip extends React.Component {
    
constructor(props){
    super(props)

    this.state = {
        user: localStorage.getItem('user'),
        location: "",
        date: "",
        been:"No",
        notes: "",
        lat: 0,
        long: 0,
        likes:[],
        images: [],
        comments:[]
    }
    this.baseState = this.state 
}

    resetForm = () => {
        this.setState(this.baseState)
    }
    onSubmit = e => {
        if(this.state.location === "" || !this.state.user){
            this.resetForm()
        }
        else{
        const span = document.getElementById('uploading');
        if (span.getAttribute("filepath") !== null){
        let images = span.getAttribute("filepath").split(",");
        this.state.images = images;
        span.setAttribute("filepath", null)
        }

        API.addTrip(this.state)
        .then(res => console.log(res))
        .then(
            setTimeout(() =>{
                span.innerText=''
                this.resetForm()
        }, 3000))
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
                    ...this.state, lat: (res.data.features[0].center[1]),
                    long: (res.data.features[0].center[0])
                }))
            }
    }


    render(){
        if (Auth.isAuthenticated) {
        return (
            <div className = "container1">
                <div className="columns" style={{ height: "100%" }}>
                    <div className="column is-two-fifths">
                    <AddForm
                        location={this.state.location}
                        date={this.state.date}
                        notes={this.state.notes}
                        images={this.state.images}
                        been = {this.state.been}
                        onSubmit={this.onSubmit}
                        handleInputChange={this.handleInputChange}
                        handleLocation={this.handleLocation}
                        handleImages={this.handleImages}/>
                    </div>
                    <div className="column scroll is-three-fifths">
                        <Map lat={this.state.lat} long={this.state.long}/>
                    </div>
                </div>
                {/* {this.state.location !== "" ? (
                <Yelp data={this.state} />
                ):(<div> </div>)} */}
            </div>
        )
        }
        else {
            return (
                <NoMatch />
            )
        }
    }
}

export default AddTrip;
