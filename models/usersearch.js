const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const userSearchSchema = new Schema({

   username: {
    type: String
   },
   agerange: {
    type: String
   },
   email: {
     type: String,
     lowercase: true,
     unique: true,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   userCategory: {
    type: String,
    required: false
   },
   categoryDescription: {
    type: String
   },
   zipCode: {
    type: Number,
    required: false
   },
   imgPath: {
    type: String
   },
   sex: {
    type: String,
    required: false
   },
   publicProfile: {
    type: Boolean,
    default: false
   }

});


const UserSearch = mongoose.model("UserSearch", userSearchSchema);

module.exports = UserSearch;