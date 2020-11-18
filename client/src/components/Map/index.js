import React from 'react';
import mapboxgl , { Marker } from 'mapbox-gl';
// import './style.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aWVjMjExNiIsImEiOiJja2Zpc28xN24waTNmMzFwbTRkMnJyb2xvIn0.DDksIwI6MKkDeLG_jFpUoQ';




class Map extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            long: -81,
            lat: 27,
            zoom: 2
        };
    }

    componentDidMount() {
         this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lat,this.state.long],
            zoom: 2
        });
    }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.data !== prevProps.data) {
          this.setState({...this.state, lat:this.props.data.lat, long:this.props.data.long});
          console.log("this.state" , this.state.lat, this.state.long)
        }
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
