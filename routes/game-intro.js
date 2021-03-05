// GET ARM quiz page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'game-intro';
	res.render('game-intro', data);
};
