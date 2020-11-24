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
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.REACT_APP_MAPBOX}`);
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
      }).then((res) => console.log(res));
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

likeTrip: function (tripid, user) {
  console.log(user)
    return axios({
      method: "PUT",
      withCredential: true,
      url: "/api/trips/likes/" + tripid + "/" + user
    }).then((res) => console.log(res));
  },
  
  unlikeTrip: function (tripid, user) {
    return axios({
      method: "PUT",
      withCredential: true,
      url: "/api/trips/unlike/" + tripid + "/" + user
    }).then((res) => console.log(res));
  },



getAllTrips: function(user){
  return axios({
      method: "GET",
      withCredential:true,
      url:"/api/trips/getalltrips/" + user
    });
  },

  uploadPhoto: function(photo){
    console.log(photo);
    return axios({
        method: "POST",
        withCredential:true,
        url:"/api/photos/upload"
      });
    }
};
