// GET ARM home page

exports.view = function (req, res) {
	let info = {};
	info.layout = 'index';
	res.render('index', info);
};
