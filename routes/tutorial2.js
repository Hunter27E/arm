// GET ARM tutorial page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'tutorial2';
	res.render('tutorial2', data);
};
