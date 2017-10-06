const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const userSchema = new Schema({

//define schema here
	 firstName: {
	 	type: String,
	 	unique: false,
	 	required: true
	 },
	 lastName: {
	 	type: String,
	 	unique: false,
	 	required: true
	 },
	 username: {
	   type: String,
	   unique: true,
	   required: true
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
	 	required: true
	 },
	 categoryDescription: {
	 	type: String
	 },
	 zipCode: {
	 	type: Number,
	 	required: true
	 },
	 imgPath: {
	 	type: String
	 },
	 sex: {
	 	type: String,
	 	required: true
	 },
	 publicProfile: {
	 	type: Boolean,
	 	default: false
	 }

});

const MS = mongoose.model("MS", userSchema);

module.exports = MS;