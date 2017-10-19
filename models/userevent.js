const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const userEventSchema = new Schema({

//define schema here
	 title: {
	 	type: String,
	 	required: true
	 },
	 date: {
	 	type: String,
	 	required: true
	 },
	 contact: {
	 	type: String
	 },
	 eventId: {
	 	type: String
	 },
	 userId: {
	 	type: String
	 }
	 

});

const UserEvent = mongoose.model("UserEvent", userEventSchema);

module.exports = UserEvent;