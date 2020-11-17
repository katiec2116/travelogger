import axios from "axios";
// const yelp = require('yelp-fusion');
// const client = yelp.client('YOUR_API_KEY');

export default {

  register: function(username, password) {
    return axios({
      method: "POST",
      data: {username: username,
        password: password
      },
      withCredential: true,
      url: "/api/users/signup"
  }).then((res) => console.log(res));
},

addTrip: function (trips, id) {
  return axios({
      method: "PUT",
      data: trips,
      withCredential:true,
      url:"/api/users/" + id
    }).then((res) => console.log(res));
  },

location: function(location){
    return axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=	JG30h6celAzQfuBmyuO2k0g4rAjh7BZc&location=${location}`);
  },

  getYelp: function(lat,long){
    return axios({
      method: "GET",
      url: "https://api.yelp.com/v3/businesses/search", 
      headers: {
          Authorization: 'Bearer fyRq-3sgxzlZ6w3T3w7kf41-O0OV49NoQDtQpqwSNhzk-jhRfUt7981mIsbBptOahMSDeGaJV7TIh6udxJDu6o2Jb3j4W8SsMTJEaF0mFPfwkCLI2TwFV5GVukZrX3Yx'
      },
      params: {
          latitude: lat,
          longitude:long,
          categories: 'breakfast_brunch',
        }
    }).then((res) => console.log(res));
  },

  getMyTrips: function(id){
    return axios({
      method: "GET",
      withCredential:true,
      url:"/api/users/" + id
    });
  },


};
