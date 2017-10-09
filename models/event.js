const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const eventsSchema = new Schema({

//define schema here
	 eventTitle: {
	 	type: String,
	 	required: true
	 },
	 eventDate: {
	 	type: String,
	 	required: true
	 },
	 eventDescription: {
	 	type: String,
	 	required: true
	 },
	 eventStreet: {
	 	type: String,
	 	required: true
	 },
	 eventCity: {
	 	type: String,
	 	required: true
	 },
	 eventState: {
	 	type: String,
	 	required: true
	 },
	 eventZip: {
	 	type: String,
	 	required: true
	 },
	 contactInfo: {
	 	type: String,
	 	required: true
	 },
	 eventOwner: {
	 	type: String,
	 	required: true
	 }

});

const Event = mongoose.model("Event", eventsSchema);

module.exports = Event;