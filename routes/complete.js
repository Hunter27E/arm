// GET ARM quiz page

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.layout = 'complete';
	res.render('complete', data);
};
