// GET ARM quiz page

exports.view = function (req, res) {
	let model = req.query["model"];

	// data to pass to template
	let data = {};
	data.exhibit = model;
	data.layout = 'game-intro';
	res.render('game-intro', data);
};
