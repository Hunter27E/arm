// GET ARM tutorial page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'picker';
	res.render('picker', data);
};
