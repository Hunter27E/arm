// GET ARM home page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'index';
	res.render('index', data);
};
