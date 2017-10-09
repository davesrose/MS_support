import React, { Component } from "react";


class AboutMS extends Component {

	VideoPlay = event => {
		window.onload = function() {

		  // Video
		  var video = document.getElementById("video");

		  // Buttons
		  var playButton = document.getElementById("play-pause");
		  var muteButton = document.getElementById("mute");
		  var fullScreenButton = document.getElementById("full-screen");

		  // Sliders
		  var seekBar = document.getElementById("seek-bar");
		  var volumeBar = document.getElementById("volume-bar");


		  // Event listener for the play/pause button
		  playButton.addEventListener("click", function() {
		    if (video.paused == true) {
		      // Play the video
		      video.play();

		      // Update the button text to 'Pause'
		      //$(playButton).css({"background" : "url('images/pause.png')", "background-size" : "cover"});
		      playButton.style.background = "url('images/pause.png')";
		      playButton.style.backgroundSize = "cover";
		    } else {
		      // Pause the video
		      video.pause();

		      // Update the button text to 'Play'
		      //$(playButton).css({"background" : "url('images/play.png')", "background-size" : "cover"});
		      playButton.style.background = "url('images/play.png')";
		      playButton.style.backgroundSize = "cover";
		    }
		  });
		  // Event listener for the mute button
		  muteButton.addEventListener("click", function() {
		    if (video.muted == false) {
		      // Mute the video
		      video.muted = true;

		      // Update the button text
		      //$(muteButton).css({"background" : "url('images/audio.png')", "background-size" : "cover"});
		      muteButton.style.background = "url('images/audio.png')";
		      muteButton.style.backgroundSize = "cover";
		    } else {
		      // Unmute the video
		      video.muted = false;

		      // Update the button text
		      //$(muteButton).css({"background" : "url('images/mute.png')", "background-size" : "cover"});
		      muteButton.style.background = "url('images/mute.png')";
		      muteButton.style.backgroundSize = "cover";
		    }
		  });
		  // Event listener for the full-screen button
		  fullScreenButton.addEventListener("click", function() {
		    if (video.requestFullscreen) {
		      video.requestFullscreen();
		    } else if (video.mozRequestFullScreen) {
		      video.mozRequestFullScreen(); // Firefox
		    } else if (video.webkitRequestFullscreen) {
		      video.webkitRequestFullscreen(); // Chrome and Safari
		    }
		  });
		  // Event listener for the seek bar
		  seekBar.addEventListener("change", function() {
		    // Calculate the new time
		    var time = video.duration * (seekBar.value / 100);

		    // Update the video time
		    video.currentTime = time;
		  });
		  // Update the seek bar as the video plays
		  video.addEventListener("timeupdate", function() {
		    // Calculate the slider value
		    var value = (100 / video.duration) * video.currentTime;

		    // Update the slider value
		    seekBar.value = value;
		  });
		  // Pause the video when the slider handle is being dragged
		  seekBar.addEventListener("mousedown", function() {
		    video.pause();
		  });

		  // Play the video when the slider handle is dropped
		  seekBar.addEventListener("mouseup", function() {
		    video.play();
		  });
		  // Event listener for the volume bar
		  volumeBar.addEventListener("change", function() {
		    // Update the video volume
		    video.volume = volumeBar.value;
		  });

		}
	}
  render() {
    return (
	  <div className="mainContent">
	    <div className="heading">
	      <h3 className="text-center">About Multiple Sclerosis</h3>
	    </div>
	    {this.VideoPlay()}
	    <div className="videoContainer">
	      <video id="video" loop autoPlay>
	        <source src="videos/01.mp4" type="video/mp4" id="mp4-1" />
	        <source src="videos/01.ogg" type="video/ogg" id="ogg-1" />
	      </video>

	      <div id="video-controls">
	        <button type="button" id="play-pause"></button>
	        <input type="range" id="seek-bar" value="0" />
	        <button type="button" id="mute"></button>
	        <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1" />
	        <button type="button" id="full-screen"></button>
	        <div className="clear"></div>
	      </div>
	    </div>

	    <div className="mainText">
	      <p>The initial diagnosis of multiple sclerosis can be very shocking and debilitating.  This site is meant as a forum for connecting with others effected with the disease, which can help offer support and awareness of this misunderstood disease.</p>
	      <p>M.S. affects an estimated 2.5 million people in the world, and is considered a leading cause of neurological disability among young adults.  It can, however, affect persons at any age: from 20 to 60.  Two out of every threee persons with M.S. are women.  There are an estimated 400,000 cases of M.S. in the United States (and interestingly, is more prevalent in Northern climates). There is a strong probability that multiple sclerosis can be brought on by other autoimmune diseases: such as type 1 diabetes, thyroid disease, and inflammatory bowel disease.  There may be a genetic predisposition: 15% of people with M.S. have family members with M.S.  In the case of identical twins, there’s a 1 in 3 chance for each sibling to have the disease. It is still considered a "rare" disease, and perhaps as such, doesn't get as much funding or research as a disease like cancer.</p>
	      <h4>Cause</h4>
	      <p>The specific cause of M.S. is unknown.  The basic mechanism is seen as lesions present within the central nervous system (the brain and spinal cord).  It is considered an autoimmune disease, as the body's immune system attacks its own nervous system tissues.  Brain and spinal tissue is composed of a system of neuron cells.  These cells send nerve impulses (both through electrical and chemical signals).  A neuron is composed of dendrites (which receive impulses), the cell body, an axon (which sends the impulse to another cell), and telodendria (which synapses with the other cell).  Along the axon, there's myelin sheaths: fatty insulation that helps conducts nerve impulses.  With M.S. the immune system attacks and deteriorates myelin: preventing normal nerve impulses in afflicted areas of the central nervous system.  Because lesions can appear anywhere in the central nervous system, people afflicted with MS can present different symptoms.  Diagnosis and tracking of the disease are done with MRI scans to determine where lesions may appear within the central nervous system.</p>
	      <h4>Symptoms</h4>
	      <p>M.S. can either be very debilitating or present as a managable obsticle: it affects people differently.  Symptoms include loss of vision, tremor in the hands or limbs, muscular cramping, involuntary movements, muscle paralysis, muscle rigidity, muscle spasms, or overactive reflexes.  Pain can be experienced behind the eyes, or from the muscular spasms.  There can be a sensation of pins and needles, reduced sensation of touch, or uncomfortable tingling and burning.  The whole body can expereince fatigue, dizziness, poor balance, vertigo, or weakness. There can be excessive urination at night, involunatory voiding, or a persistent urge to urinate.  There can be erecticle dysfunction or other sexual dysfunctions.  Slurred speech, impaired voice, difficulty swallowing can be other symptoms.  It is not uncommon to have mood swings, difficulty sleeping, and depression.</p>
	      <h4>Types</h4>
	      <p>There are 10-20&#37; of M.S. patients that will have a relatively benign form of the disease throughout their lifetime.  There is a rare 1&#37; that have a very aggressive form that progresses very rapidly.  A person who becomes afflicted with M.S. will first experience an episode. This first episode can be classified as a "clinically isolated syndrome" (CIS): in which neurological symptoms persist for at least 24 hours from inflammation and demyelination in the central nervous system.  It is not yet met as a criteria for diagnosis of MS, since it may be temporary.  For those that go on to develop M.S., the most common form of M.S. is "relapsing-remitting MS" (RRMS).  It is characterized by having clearly defined attacks of new or increasing neurologic symptoms.  These attacks, also known as relapses are followed by periods of partial or complete recovery (remissions).  50&#37; of patients with RRMS will transition to secondary-progressive MS (SPMS) within a decade of initial diagnosis.  This means that there's a progressive worstening neurologic function.  A minority of people diagnosed with M.S. have "primary progressive MS" (PPMS).  There's worstening neurologic function from the onset, without early relapses or remissions.</p>
	      <h4>Treatment</h4>
	      <p>There are different types of medications and therapies that can help aleviate symptoms and associated mood.    Mitoxantrone is a chemotherapy drug that can inhibit some cell growth.  Interferon beta-1a is an anti-inflammatory that can prevent inflamation in joints and tissues.  Immunosuppressive drugs that can reduce immune response include: Peginterferon beta-1a, Axathiprine, Fingolimod, Natalizumab, Interferon beta-1b, and Glatiramer.  The steroid, Methylprednisolone, can modify hormone effects, and reduce inflammation.  Physical therapy can be very benificial for restoring muscle strength and function.  Counseling and support groups can help with depression.  Specialists include neurologists, speech therapists, occupational therapists, clinical psychologists, and primary care providers.</p>
	    </div>
	    
	  </div>
	  )
	}
	
}  

 export default AboutMS;

 // <script src="video.js"></script>