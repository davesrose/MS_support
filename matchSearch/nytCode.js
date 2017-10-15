// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURL = `http://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=30307&minimumradius=0&maximumradius=5&key=HPFK5BA7MRAI9NOA154O`;

// Counter to keep track of article numbers as they come in
var articleCounter = 0;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(res) {
    console.log(res)
    console.log(res.DataList[0].Code);
  });