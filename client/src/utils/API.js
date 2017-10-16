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
  	return axios.post("/api/file/upload", formData);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Update a profile in the database
  updateProfile: function(id, profileData) {
    console.log(profileData);
    return axios.put("/api/users/" + id, profileData);
  }
};