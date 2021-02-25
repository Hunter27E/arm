// GET ARM quiz page

const quiz = require('../game.json');

exports.view = function (req, res) {
	var questionID = req.query;
	question_number = parseInt(questionID["id"]);

	// data to pass to template
	let data = quiz["questions"][question_number];
	
	data.layout = 'quiz';
	console.log(data);
	
	res.render('quiz', data);
};
