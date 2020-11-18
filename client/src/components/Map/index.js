import React from 'react';
import mapboxgl , { Marker } from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: props.data.long,
            lat: props.data.lat,
            zoom: 0
        };
    }

    componentDidMount() {
        console.log(this.state)
         this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long,this.state.lat],
            zoom: this.state.zoom
        });
    }


   async componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.data !== prevProps.data) {
          await this.setState({ lat:this.props.data.lat, long:this.props.data.long, zoom:7});
        //   console.log(this.state)
          this.componentDidMount();
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
