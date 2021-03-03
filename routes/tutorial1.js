// GET ARM tutorial page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'tutorial1';
	res.render('tutorial1', data);
};
