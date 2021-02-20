// GET ARM quiz page

exports.view = function (req, res) {
	let info = {};
	info.layout = 'quiz';
	res.render('quiz', info);
};
