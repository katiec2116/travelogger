import React from 'react';
import mapboxgl from 'mapbox-gl';
import API from "../../utils/API"
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;


class ExploreMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: props.all,
            long: 0,
            lat: 0,
            // zoom: 0
        };
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long, this.state.lat],
            zoom: 1
        });
        console.log(this.props.all)
    }

    async componentDidUpdate() {
        // const user = localStorage.getItem('user');
        if (this.props.all.length) {
            // console.log(this.props.all)
                // await API.getAllTrips(user)
                // .then(results =>
                //     this.setState({ ...this.state, trips: results.data }))
                        // console.log(this.state))
                // .catch(err => console.log(err))
                // .then(console.log(this.props.trips))
            

                
            const user =localStorage.getItem('user')
            this.props.all.map(trip => {
                console.log(trip)
                if (trip.user === user) {
                    this.marker = new mapboxgl.Marker({ color: 'rgb(3, 252, 240)' })
                        .setLngLat([trip.long, trip.lat])
                        .addTo(this.map)
                        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
                            `<div> <p>Location: ${trip.location}</p><p>Notes: ${trip.notes}</p> </div>`))
                } else {
                    this.marker = new mapboxgl.Marker({ color: 'rgb(55, 0, 87)' })
                        .setLngLat([trip.long, trip.lat])
                        .addTo(this.map)
                        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
                            `<div> <p>Location: ${trip.location}</p><p>Notes: ${trip.notes}</p> </div>`))

                }
            })
        }
        
    }


    render() {
        return (

            <div className="mt-6">
                <div style={{width: "98%"}} ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default ExploreMap
