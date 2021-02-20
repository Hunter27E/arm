// GET ARM blank page

exports.view = function (req, res) {
	let info = {};
	info.layout = 'blank';
	res.render('blank', info);
};
