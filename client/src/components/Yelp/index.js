import React from 'react';
import axios from "axios";
import "./yelp.css"
import yelp from "./yelp.png"
const yelp_key = process.env.REACT_APP_YELP

class Yelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: 1,
            lat: 1,
            restaurants: []
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
                this.setState({ ...this.state, restaurants: res.data.businesses })
            })
            .catch((err) => {
                console.log('error')
            })
    }


    async componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.data !== prevProps.data) {
            await this.setState({ lat: this.props.data.lat, long: this.props.data.long });
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div style={{marginLeft: "auto" ,marginRight: "auto",marginTop: "20px"}}>
                

                {!this.state.restaurants.length ? (
                    <h1 className="subtitle has-text-centered my-4 pb-6">No restaurants in the area! <p> &#128546;</p></h1>
                ) : (
                        <div style={{display: "flex" ,flexWrap: "wrap", justifyContent:"space-around", alignContent: "flex-start", flexDirection: "row"}}>
                            {this.state.restaurants.map(place => (
                                <div className="card__wrapper box pb-0">
                                    <div className="card__photo">
                                    {!place.image_url ? (<img style={{height:"200px", width:"200px"}} src={yelp} alt={place.title}/>
                                    ) : 
                                    
                                    (<img style={{height:"200px", width:"200px"}}
                                    src={place.image_url} alt={place.title}/>)}
                                            
                                    </div>
                                    <div className="restaurants-container">
                                        <div style={{width:"200px"}}>
                                        <span className="restaurants__name"><a href={place.url} target="_blank" className="restaurants__name-link">{place.name}</a></span>
                                        </div>
                                        <span>{place.display_phone}</span>
                                        <div className="restaurants__rating">
                                        <span className="restaurants-info__cost">{place.price}</span>
                                            <span className={place.rating}></span>
                                            <span className="review-counter">{place.review_count} reviews</span>
                                        </div>
                                        <div className="restaurants-info">
                                            <span>{place.categories.map(type => <p className="restaurants-info__food">{type.title} </p>)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Yelp
