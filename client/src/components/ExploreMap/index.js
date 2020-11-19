import React from 'react';
import mapboxgl from 'mapbox-gl';
import API from "../../utils/API"
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class ExploreMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            long: 0,
            lat: 0,
            zoom: 2
        };
    }

     componentDidMount() {
         this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long,this.state.lat],
            zoom: this.state.zoom
        });
    }

   async componentDidUpdate() {
       console.log(this.state.users)
//     const id = localStorage.getItem('user');
//     if (!this.state.trips.length){
//    await  API.getMyTrips(id)
//         .then(results => 
//             this.setState({ ...this.state, trips: results.data.trips })).then(console.log(this.state))
//         .catch(err => console.log(err))
    }

    // this.props.all.map(trip => (
    //     this.popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    //         `<div> <p>Location: ${trip.location}</p><p>Notes: ${trip.notes}</p> </div>`),
    //     this.marker = new mapboxgl.Marker({color:'rgb(153,0,153)'})
    //     .setLngLat([trip.long, trip.lat])
    //     .addTo(this.map)
    //     .setPopup(this.popup))
        
        
    //     )
    // }

    

    render() {
        return (
            
            <div className="mt-6">
     
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default ExploreMap
