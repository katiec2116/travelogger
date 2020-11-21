import React from 'react';
import mapboxgl from 'mapbox-gl';
import API from "../../utils/API"
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // trips: [],
            long: 0,
            lat: 0,
            zoom: 1
        };
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long, this.state.lat],
            zoom: this.state.zoom
        });
    }

    async componentDidUpdate() {
        // const user = localStorage.getItem('user');
        if (this.props.trips.length) {
            // await API.getMyTrips(user)
            //     .then(results =>
            //         // this.setState({ ...this.state, trips: results.data })).then(
            //         console.log(this.state))
            //     .catch(err => console.log(err))
            //     .then(console.log(this.props.trips))
        

        this.props.trips.map(trip => {
            console.log(trip)
            if (trip.been === "Yes") {
                this.marker = new mapboxgl.Marker({ color: 'rgb(0, 145, 156)' })
                    .setLngLat([trip.long, trip.lat])
                    .addTo(this.map)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
                        `<div> <p class=location>Location: ${trip.location}</p><p>Notes: ${trip.notes}</p> </div>`))
            } else {
                this.marker = new mapboxgl.Marker({ color: 'rgb(232, 117, 51)' })
                    .setLngLat([trip.long, trip.lat])
                    .addTo(this.map)
                    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
                        `<div> <p class=location>Location: ${trip.location}</p><p>Notes: ${trip.notes}</p></br> <button class="button is-small"> edit </button> </div>`))
            }
        })
    }
    }


    render() {
        return (

            <div className="mt-6">
                <div ref={el => this.mapContainer = el} className='mapContainer1' >
                    <div className="legend">
                        <div>
                            <h2 className="legendTitle pb-2">Your Trips</h2>
                        </div>
                        <div className="pb-2">
                            <span className="circle1"></span>
                            <span className="items ml-1">Planned</span>
                        </div>
                        <div>
                            <span className="circle2"></span>
                            <span className="items ml-1">Visited </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map
