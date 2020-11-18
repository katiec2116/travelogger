import React from 'react';
import axios from "axios";

class Yelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: -81,
            lat: 27
        };
    }

    componentDidMount() {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: `Bearer fyRq-3sgxzlZ6w3T3w7kf41-O0OV49NoQDtQpqwSNhzk-jhRfUt7981mIsbBptOahMSDeGaJV7TIh6udxJDu6o2Jb3j4W8SsMTJEaF0mFPfwkCLI2TwFV5GVukZrX3Yx`
            },
            params: {
                categories: 'restaurant',
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log('error')
            })
        }


        componentDidUpdate(prevProps) {
            console.log(prevProps)
            // Typical usage (don't forget to compare props):
            if (this.props.data !== prevProps.data) {
                this.setState({lat:this.props.data.lat, long:this.props.data.long});
                this.componentDidMount();
            }
          }

        render(){
            return (
                <div>

                </div>
            )
        }
    }

    export default Yelp
