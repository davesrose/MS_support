import axios from "axios";

//defining API calls that will be handled by express

export default {
  register: function(userData) {
  	return axios.post("/api/auth/register", userData);
  },
  authenticate: function(userData) {
  	return axios.post("/api/auth/authenticate", userData);
  }
  // Gets all books
};