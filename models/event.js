const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const eventSchema = new Schema({

//define schema here
	 title: {
	 	type: String,
	 	required: true
	 },
	 date: {
	 	type: String,
	 	required: true
	 },
	 description: {
	 	type: String,
	 	required: false
	 },
	 street: {
	 	type: String,
	 	required: false
	 },
	 city: {
	 	type: String,
	 	required: false
	 },
	 state: {
	 	type: String,
	 	required: false
	 },
	 zip: {
	 	type: String,
	 	required: false
	 },
	 contact: {
	 	type: String,
	 	required: false
	 },
	 owner: {
	 	type: String,
	 	required: false
	 }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;