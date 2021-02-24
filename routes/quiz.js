// GET ARM quiz page

const quiz = require('../game.json');

exports.view = function (req, res) {
	// data to pass to template
	let data = quiz;
	data.layout = 'quiz';
	
	var questionID = req.query;
	console.log(req.query);

	data.question_number = parseInt(questionID["id"]);
	console.log(data);
	
	res.render('quiz', data);
};
