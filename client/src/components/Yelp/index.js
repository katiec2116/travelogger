import React from 'react';
import axios from "axios";
const yelp_key = process.env.REACT_APP_YELP

class Yelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: -81,
            lat: 27,
            restaurants:[]
        };
    }

    componentDidMount() {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: yelp_key
            },
            params: {
                categories: 'restaurant',
            }
        })
            .then((res) => {
                console.log(res.data.businesses)
                this.setState({...this.state, restaurants: res.data.businesses})

            })
            .catch((err) => {
                console.log('error')
            })
    }


    async componentDidUpdate(prevProps) {
        console.log(prevProps)
        // Typical usage (don't forget to compare props):
        if (this.props.data !== prevProps.data) {
            await this.setState({ lat: this.props.data.lat, long: this.props.data.long });
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div>

                    {!this.state.restaurants.length ? (
                        <h1 className="subtitle has-text-centered my-4 pb-6">No restaurants in the area! <p> &#128546;</p></h1>
                    ) : (
                            <div>
                                {this.state.restaurants.map(place => (
                                    


                <div className="box" key={place.id}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={place.image_url }alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                
                                    <strong>{place.name}</strong> <small>{place.location.address1}</small>
                                    <ul>
                                    {place.categories.map(type => (
                                        <li>{type.title}</li>
                                    ))}
                                    </ul>                               
                                
                            </div>
                        </div>
                    </article>
                </div>
                    ))}
                    </div>
                )}


            </div>
        )
    }
}

export default Yelp
