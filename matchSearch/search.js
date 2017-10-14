const axios = require("axios");
const db = require("mongodb");
const userdb = require("../models/usersearch");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ms_support";

//new profile info passed argument will be newUser
const newUserName = "Edna";
const newAgeRange = "20-29";
const newSex = "F";
const newZip = 30307;
//

const zipquery = `http://www.zipcodeapi.com/rest/UNMx6LvIWub011J0vWIfGENRfTMGsxfml2UsNpaKTmKVnuVSqE86iVYyOKehhuED/radius.json/${newZip}/30/miles?minimal`;

const matchUsers = newUser => {

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("usersearches").find().toArray(function(err, result) {
	    if (err) throw err;

	    for (var i=0; i < result.length; i++) {

	    	if ((result[i].agerange === newAgeRange)) {
	    		const sameArea = false;
				axios.get(zipquery).then(zipRes => {
					for (var j=0; j < zipRes.length; j++) {
						if (newzip === zipRes[j]) {
							return sameArea = true;
						}
					}
				});
			}

		}

	    db.close();
	  });
	});
};