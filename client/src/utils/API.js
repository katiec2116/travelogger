import axios from "axios";

export default {

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },

  deleteUser: function(username) {
    return axios.delete("/api/user/" + username);
  },
};
