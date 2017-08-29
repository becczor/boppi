var isStarted = false; 
var videoState = 'pause';

function toggleAnimation() {
		// OnClick function for start button
		isStarted = !isStarted
		if (isStarted) {
			render();
			buttonPlayPress();
		} 
	}

$( document ).ready(function() {

	function buttonPlayPress() {
	    if(videoState == 'pause') {

			videoState = 'play';
			$.("#play-symbol").removeClass("fa-play").addClass("fa-pause"); 

	    } else if(videoState == 'play') {

			videoState = 'pause';
			$.("#play-symbol").removeClass("fa-pause").addClass("fa-play"); 

	    }

	    console.log("button play pressed, play was " + videoState);
	}

	

};