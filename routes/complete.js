// GET ARM quiz page

exports.view = function (req, res) {
	// data to pass to template
	let model = req.query["model"];
	let data = {};
	data.exhibit = model;
	data.layout = 'complete';
	res.render('complete', data);
};
