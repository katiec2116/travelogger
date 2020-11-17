import React from 'react';
import mapboxgl , { Marker } from 'mapbox-gl';
import './style.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aWVjMjExNiIsImEiOiJja2Zpc28xN24waTNmMzFwbTRkMnJyb2xvIn0.DDksIwI6MKkDeLG_jFpUoQ';




class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -81,
            lat: 27,
            zoom: 2
        };
    }

    componentDidMount() {
         this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-81,27],
            zoom: 2
        });
    }

    //  componentDidUpdate() {
    //         this.setState({
    //             lng: this.props.data.long,
    //             lat: this.props.data.lat,
    //             zoom: 5
    //         });
    //     };
    

    render() {
        return (
            <div className="mt-6">
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default Map
