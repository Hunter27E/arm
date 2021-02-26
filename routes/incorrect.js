// GET ARM quiz page
const quiz = require('/data/game.json');

exports.view = function (req, res) {
	var questionID = req.query;
	question_number = parseInt(questionID['id']);

	// data to pass to template
	let data = quiz['questions'][question_number];

	data.layout = 'incorrect';
	console.log(data);
	res.render('incorrect', data);
};
