// GET ARM quiz page
const quiz = require('../public/data/game.json');
const score = require('../public/data/score.json');

exports.view = function (req, res) {
	var query = req.query;
	question_number = parseInt(query['id']);

	var choice = req.query['chose'];
	let model = req.query["model"];

	// data to pass to template
	let data = {};
	data.incorrect = [];

	data.question = quiz[model]['questions'][question_number];
	data.exhibit = model;
	// data.question = quiz['questions'][question_number];

	var obj = new Object();
	obj.question = data.question.question;
	obj.incorrect_answer = choice;
	// var correct_answer;
	for (i = 0; i < data.question.answers.length; i++) {
		if (data.question.answers[i].is_correct) {
			obj.correct_answer = data.question.answers[i].answer;
		}
	}
	// obj.incorrect = {"question": question, "incorrect-answer": incorrect_answer, "correct-answer": correct_answer}

	data.incorrect.push(obj);

	// console.log(data);

	data.layout = 'incorrect';
	// console.log(data);
	res.render('incorrect', data);
};
