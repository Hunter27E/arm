// GET ARM tutorial page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'tutorial4';
	res.render('tutorial4', data);
};
