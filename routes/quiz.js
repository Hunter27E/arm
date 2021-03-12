// GET ARM quiz page

const quiz = require('../public/data/game.json');

exports.view = function (req, res) {
	var questionID = req.query;
	question_number = parseInt(questionID['id']);
	let model = questionID['model'];

	// data to pass to template
	let data = {};

	data.question = quiz[model]['questions'][question_number];
	data.exhibit = model;

	data.layout = 'quiz';
	//console.log(data);

	res.render('quiz', data);
};
