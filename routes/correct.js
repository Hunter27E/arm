// GET ARM quiz page
const quiz = require('../public/data/game.json');

exports.view = function (req, res) {
	var questionID = req.query;
	question_number = parseInt(questionID['id']);

	// data to pass to template
	let data = quiz['questions'][question_number];

	data.layout = 'correct';
	console.log(data);

	res.render('correct', data);
};
