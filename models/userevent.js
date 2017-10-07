const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const usereventSchema = new Schema({

//define schema here
	 username: {
	 	type: String,
	 	required: true
	 },
	 eventTitle: {
	 	type: String,
	 	required: true
	 },
	 eventId: {
	 	type: String,
	 	required: true
	 }
	 

});

const userevent = mongoose.model("MS", usereventSchema);

module.exports = userevent;