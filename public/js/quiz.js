'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
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
    // console.log($(this).text());
    const questionID = getUrlVars();
	const question_number = parseInt(questionID["id"]);
    console.log(questionID);
    const model = questionID["model"];
    location.href = "/incorrect?id=" + question_number + "&chose=" + $(this).text() + "&model=" + model;
}

function clickedCorrectButton(e) {
    // console.log($(this).text());
    e.preventDefault();
    const questionID = getUrlVars();
    const question_number = parseInt(questionID["id"]);
    console.log(questionID["model"])
    const model = questionID["model"]
    location.href = "/correct?id=" + question_number + "&chose=" + $(this).text() + "&model=" + model;
}

// Read a page's GET URL variables and return them as an associative array.
// https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}