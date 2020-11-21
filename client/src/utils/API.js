import axios from "axios";

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

addTrip: function (trips) {
  console.log(trips)
  return axios({
      method: "POST",
      data: trips,
      url:"/api/trips"
    }).then((res) => console.log(res, "hello'"));
  },

location: function(location){
  return axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=	JG30h6celAzQfuBmyuO2k0g4rAjh7BZc&location=${location}`);
  },

getMyTrips: function(user){
  return axios({
      method: "GET",
      withCredential:true,
      url:"/api/trips/" + user
    });
  },

getMyTripsType: function(user, been){
    return axios({
        method: "GET",
        withCredential:true,
        url:"/api/trips/" + user +"/been/" + been
      });
    },

  getTrip: function(tripid){
    return axios({
        method: "GET",
        withCredential:true,
        url:"/api/trips/" + tripid
      });
    },


deleteTrip: function (tripid) {
    return axios({
      method: "DELETE",
      withCredential: true,
      url: "/api/trips/" + tripid
    }).then((res) => console.log(res));
  },


updateTrip: function (tripid, data) {
    return axios({
      method: "PUT",
      data: data,
      withCredential: true,
      url: "/api/trips/" + tripid
    }).then((res) => console.log(res));
  },



getAllTrips: function(user){
  return axios({
      method: "GET",
      withCredential:true,
      url:"/api/trips/getalltrips/" + user
    });
  },


};
