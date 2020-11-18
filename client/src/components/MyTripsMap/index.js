import React from 'react';
import mapboxgl from 'mapbox-gl';
import API from "../../utils/API"
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips:[],
            long: props.long,
            lat: props.lat,
            zoom: 0
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
    const id = localStorage.getItem('user');
    if (!this.state.trips.length){
   await  API.getMyTrips(id)
        .then(results => 
            this.setState({ ...this.state, trips: results.data.trips })).then(console.log(this.state))
        .catch(err => console.log(err))
    }

    this.props.all.map(trip => (
        // console.log(trip.lat , trip.long)))
        this.marker = new mapboxgl.Marker()
        .setLngLat([trip.long, trip.lat])
        .addTo(this.map)))
    }

    

    render() {
        return (
            
            <div className="mt-6">
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.long} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default Map
