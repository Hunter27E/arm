'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    console.log("test");
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#false.btn.btn-secondary').click(clickedIncorrectButton);
	$('#true.btn.btn-secondary').click(clickedCorrectButton);
}



function clickedIncorrectButton(e) {
    e.preventDefault();
    location.href = "/incorrect";
}

function clickedCorrectButton(e) {
    e.preventDefault();
    location.href = "/correct";
}