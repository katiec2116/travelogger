import axios from "axios";

export default {

  createUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(username) {
    return axios.post("/api/users/login", username);
  },

  deleteUser: function(username) {
    return axios.delete("/api/user/" + username);
  },
};
