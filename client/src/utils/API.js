import axios from "axios";

export default {

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  // Deletes the book with the given id
  deleteUer: function(username) {
    return axios.delete("/api/user/" + username);
  },
};
