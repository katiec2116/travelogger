import React from 'react';
import API from "../../utils/API"
import mapboxgl from 'mapbox-gl';
import ReactDOM from "react-dom";
import Popup from "../Popup"
mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX}`;



class ExploreMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: props.all,
            long: 0,
            lat: 0,
            trip: ''
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

     addLike(){
        // await this.state.set({...this.state, trip:likedTrip});
        console.log("hello")
    }
    

    async componentDidUpdate() {       
        const user = localStorage.getItem('user');
        if (!this.props.all.length) {
            console.log(this.props.all)
                await API.getAllTrips(user)
                .then(results =>
                    this.setState({ ...this.state, trips: results.data }))
                        // console.log(this.state))
                .catch(err => console.log(err))
                .then(console.log(this.props.trips))
            }

            this.props.all.map(trip => {
                let status=false;
                if (trip.likes.includes(user)){
                    status=true
                }
                const popup = document.createElement('div');
                ReactDOM.render(<Popup trip={trip} status={status} showDetails={this.props.showDetails}/>, popup);
                

                if (trip.user === user) {
                    this.marker = new mapboxgl.Marker({ color: 'rgb(117, 0, 0)' })
                        .setLngLat([trip.long, trip.lat])
                        .addTo(this.map)
                        .setPopup(new mapboxgl.Popup({ offset: 25 }).setDOMContent(popup))
                } else {
                    this.marker = new mapboxgl.Marker({ color: 'rgb(171, 171, 171)' })
                        .setLngLat([trip.long, trip.lat])
                        .addTo(this.map)
                        .setPopup(new mapboxgl.Popup({ offset: 25 }).setDOMContent(popup))
                }
            })
    }


    render() {
        return (

            <div>
                <div ref={el => this.mapContainer = el} className='mapContainerExplore' >
                    <div className="legend">
                        <div>
                            <h2 className="legendTitle pb-2">All Trips</h2>
                        </div>
                        <div className="pb-2">
                            <span className="myTrips"></span>
                            <span className="items ml-1">My Trips </span>
                        </div>
                        <div>
                            <span className="other"></span>
                            <span className="items ml-1">Others Trips </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExploreMap
