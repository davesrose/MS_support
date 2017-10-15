const axios = require("axios");
const db = require("mongodb");
const userdb = require("../models/usersearch");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ms_support";
var request = require("request");
var react = require("react");
var fetch = require("react-fetch");

//new profile info passed argument will be newUser
const newUserEmail = "edna@gmail.com";
const newAgeRange = 19;
const newSex = "F";
const newZip = 30307;

//const apiKeyZipCode = 'js-okLIlW7Iff1cWtt5AXRrTCDDv5LO0gspAe8VafEpvGBr94xK2pbV1PzwUklVBOkb';

//https://www.zipcodeapi.com/rest/sQ8TmdgmloK621rldEfKmRs6UEf6vc5Y3eSpr8MMwwTzxlUL09wn1YtVCI28V76Y/radius.json/30309/5/miles?minimal

var zipquery = `https://www.zipcodeapi.com/rest/sQ8TmdgmloK621rldEfKmRs6UEf6vc5Y3eSpr8MMwwTzxlUL09wn1YtVCI28V76Y/radius.json/${newZip}/5/miles?minimal`;

//const googleKey = "AIzaSyA4jhaZjrF_vI7T7J_r3dH0uP5LcSB5Zik"

//const zipquery = `http://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${newZip}&minimumradius=0&maximumradius=5&key=HPFK5BA7MRAI9NOA154O`

var results = [];

const matchUsers = newUser => {

	const zipCodes = [];
	const zipquery = `https://www.zipcodeapi.com/rest/sQ8TmdgmloK621rldEfKmRs6UEf6vc5Y3eSpr8MMwwTzxlUL09wn1YtVCI28V76Y/radius.json/${newZip}/10/miles?minimal`;
	let sameArea = false;
	axios.get(zipquery).then(zipRes => {
		console.log(zipRes.data.zip_codes[0])
		for (var i=0; i < zipRes.data.zip_codes.length; i++) {
			zipCodes.push(zipRes.data.zip_codes[i]);
		}
	});
	console.log(zipCodes);

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("usersearches").find().toArray(function(err, result) {
	    if (err) throw err;
	    // axios.get(zipquery).then(zipRes => {
	    // 	console.log(zipRes);
	    // });
	    //console.log(result);
	    
		// const matchedUsersArea = [];
		// const matchedUsers = [];
		// axios.get(zipquery).then(zipRes => {
		// 	const zipSearch = zipRes.data.zip_codes
		// 	//console.log(zipRes);
		//     for (var i=0; i < .length; i++) {
				
		// 		for (var j=0; j < zipSearch.length; j++) {
		// 			if (newZip === zipSearch[j]) {
		// 				return sameArea = true;

		// 		    	if ((sameArea === true) && (result[i].agerange === newAgeRange)) {
				    		
		// 		    		matchedUsersArea.push(result[i]);
		// 		    		//console.log(matchedUsersArea);
		// 				}

		// 			}
		// 		}
		// 	}
		// });

		// if (matchedUsersArea.length > 5) {
		// 	for (var z=0; z < matchedUsersArea.length; z++) {
		// 		for (var w=0; w < matchedUsersArea.length; w++) {
		// 			if (matchedUsersArea[w] !== matchedUsersArea[z]) {
		// 				const randomNum = Math.floor(Math.random() * matchedUsersArea) + 1;
		// 				matchedUsers.push(matchedUsersArea[randomNum]);
		// 			}
		// 		}
				
		// 	}
		// } else {
		// 	matchedUsers.push(matchedUsersArea);
		// }


		//console.log("matched users for whole area: "+matcedUsersArea);
		//console.log("matched users: "+matcedUsers);
	    db.close();
	  });
	});
};
matchUsers();
