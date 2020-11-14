import axios from "axios";

export default {

  register: function(username, password) {
    return axios({
      mthod: "POST",
      data: {username: username,
        password: password
      },
      withCredential: true,
      url: "/api/users/signup"
  }).then((res) => console.log(res));
}

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
