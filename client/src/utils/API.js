import axios from "axios";

//defining API calls that will be handled by express

export default {
  register: function(userData) {
  	return axios.post("/api/auth/register", userData);
  },
  authenticate: function(userData) {
  	return axios.post("/api/auth/authenticate", userData);
  },
  uploadImage: function(formData) {
  	console.log(formData);
  	return axios.post("/api/file/upload", formData);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Update a profile in the database
  updateProfile: function(param, profileData) {
    return axios.post("/api/users", {
                            params: {
                              _id: param
                            }
                          }, profileData);
  }
};