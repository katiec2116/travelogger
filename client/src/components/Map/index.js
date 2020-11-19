import React from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: 0,
            lat: 0,
            zoom: 1
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
        this.marker = new mapboxgl.Marker()
            .setLngLat([this.state.long,this.state.lat])
            .addTo(this.map)
    }


   async componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.lat !== prevProps.lat) {
          await this.setState({ lat:this.props.lat, zoom:7});
          this.componentDidMount();
        }
        if (this.props.long !== prevProps.long) {
            await this.setState({ long:this.props.long, zoom:7});
            this.componentDidMount();
      }
    }

    

    render() {
        return (
            <div className="mt-6">
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default Map
