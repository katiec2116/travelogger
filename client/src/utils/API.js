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

addTrip: function(username, password) {
  return axios({
    method: "POST",
    data: {username: username,
      password: password
    },
    withCredential: true,
    url: "/api/users/signup"
}).then((res) => console.log(res));
},

location: function(location){
    return axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=	JG30h6celAzQfuBmyuO2k0g4rAjh7BZc&location=${location}`);
  },

  // getUsers: function() {
  //   return axios.get("/api/users");
  // },

  // getUser: function(username) {
  //   return axios.post("/api/users/login", username);
  // },

  // deleteUser: function(username) {
  //   return axios.delete("/api/user/" + username);
  // },
};
