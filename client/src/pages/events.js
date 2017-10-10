import React, { Component } from "react";

class Events extends Component {

  render() {
    return (
	  <div className="mainContent">
	    <div className="heading">
	      <h3 className="text-center">Events</h3>
	    </div>
	    
	    

	    <div className="mainText">
	    
	      <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Enter New Event</strong></h3>
              </div>
              <div className="panel-body">
              	<form className="eventsForm">
              		<label>Title:</label><br />
              		<input type="text" placeholder="Enter the title of your event" /><br />

              		<label>Location:</label><br />
              		<input type="text" placeholder="Enter the location of your event" /><br />

              		<label>Time:</label><br />
              		<input type="text" placeholder="Enter the time of your event" /><br />
 
              		<label>Details:</label><br />
              		<textarea placeholder="Enter any details of your event"></textarea><br />
 
              		<label>Contact Info:</label><br />
              		<input type="text" placeholder="Enter contact name and phone or email" /><br />
              	</form>
              </div>
	      </div>

	    </div>
	    
	  </div>
	  )
	}
	
}  

 export default Events;