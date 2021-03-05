'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#play-again').click(clickedPlayAgain);
}



function clickedPlayAgain(e) {
    e.preventDefault();

    location.href = "/quiz?id=0";
}