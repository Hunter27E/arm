// GET ARM quiz page
const quiz = require('../public/data/game.json');
const score = require('../public/data/score.json');

exports.view = function (req, res) {
	var questionID = req.query;
	question_number = parseInt(questionID['id']);
	var model = questionID['model'];

	// data to pass to template
	let data = {};
	data.exhibit = model;

	//console.log(req.query);
	data.question = quiz[model]['questions'][question_number];
	// data.question = quiz['questions'][question_number];
	data.layout = 'correct';

	// console.log(score);
	res.render('correct', data);
};
