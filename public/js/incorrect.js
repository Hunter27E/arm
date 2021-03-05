'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#next').click(clickedNext);
}

function clickedNext(e) {
	e.preventDefault();
	const next_question_id = parseInt(getUrlVars()['id']) + 1;

	// TODO: Hard coded number of questions to be 4, should be dynamic
	if (next_question_id > 7) {
		location.href = '/complete';
		//console.log("complete")
	} else {
		location.href = '/quiz?id=' + next_question_id;
	}
}

// TODO fix
// Read a page's GET URL variables and return them as an associative array.
// https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href
		.slice(window.location.href.indexOf('?') + 1)
		.split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}
