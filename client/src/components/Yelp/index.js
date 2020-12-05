import React from 'react';
import axios from "axios";
import "./yelp.css"
import yelp from "./yelp.png"
const yelp_key = `${process.env.REACT_APP_YELP}`

class Yelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: 1,
            lat: 1,
            businesses: [],
            activeTab: "All"
        };
    }

    componentDidMount(type) {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: "Bearer " + yelp_key
            },
            params: {
                categories: type,
            }
        })
            .then((res) => {
                this.setState({ ...this.state, businesses: res.data.businesses, activeTab: type})
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
            <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}>


                {!this.state.businesses.length ? (
                    <h1 className="subtitle has-text-centered my-4 pb-6">No businesses in the area! <span role="img" aria-label="emoji"> &#128546;</span></h1>
                ) : (
                        <div className="has-text-centered">
                            <h1 className = "suggest">Suggestions for {this.props.data.location}</h1>
                            <div className="tabs is-boxed is-centered">
                                <ul>
                                    <li className={this.state.activeTab === "All" ? "is-active" : "notActiveTab"} onClick={() => this.componentDidMount("")}>
                                        <a>
                                            <span>All</span>
                                        </a>
                                    </li>
                                    <li className={this.state.activeTab === "hotels, bedbreakfasts" ? "is-active" : "notActiveTab"} onClick={() => this.componentDidMount("hotels, bedbreakfasts")}>
                                        <a>
                                            <span>Hotels</span>
                                        </a>
                                    </li>
                                    <li className={this.state.activeTab === "restaurants, food" ? "is-active" : "notActiveTab"} onClick={() => this.componentDidMount("restaurants, food")}>
                                        <a>
                                            <span>Food</span>
                                        </a>
                                    </li>
                                    <li className={this.state.activeTab === "arts, all" ? "is-active" : "notActiveTab"} onClick={() => this.componentDidMount("arts, all")}>
                                        <a>
                                            <span>Arts</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignContent: "flex-start", flexDirection: "row" }}>
                                {this.state.businesses.map(place => (
                                    <div className="card__wrapper box pb-0" key={place.id}>
                                        <div className="card__photo">
                                            {!place.image_url ? (<img style={{ height: "206px", width: "224px" }} src={yelp} alt={place.title} />
                                            ) :

                                                (<img style={{ height: "206px", width: "224px" }}
                                                    src={place.image_url} alt={place.title} />)}

                                        </div>
                                        <div className="restaurants-container">
                                            <div style={{ width: "200px" }}>
                                                <span className="restaurants__name"><a href={place.url} target="_blank" rel="noopener noreferrer" className="restaurants__name-link">{place.name}</a></span>
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
                        </div>
                    )}
            </div>
        )
    }
}

export default Yelp
