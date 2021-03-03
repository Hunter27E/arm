// GET ARM tutorial page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'tutorial3';
	res.render('tutorial3', data);
};
