import React, { Component } from "react";

class AboutSite extends Component {

  render() {
    return (
	  <div className="mainContent">
	    <div className="heading">
	      <h3 className="text-center">About MS Connect</h3>
	    </div>
	    
	    

	    <div className="mainText">
	      <img className="aboutIMG" alt="about" src="images/multiple-sclerosis.jpg" /><br />
	      <p>The initial diagnosis of multiple sclerosis can be very shocking and debilitating.  This site is meant as a forum for connecting with others effected with the disease, which can help offer support and awareness of this misunderstood disease.</p>
	      <p>After signing up and completing your profile, you can be matched with others in your area.  This site is meant for both an area of information and support from others that are affected with this disease.  This is also the place for seeing or posting events specific to MS that are happening in your area.  Events may include support group meetings, social events, fundraisers, or walk/run events.</p>
	    </div>
	    
	  </div>
	  )
	}
	
}  

 export default AboutSite;