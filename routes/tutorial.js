// GET ARM tutorial page

exports.view = function (req, res) {
	let info = {};
	info.layout = 'tutorial';
	res.render('tutorial', info);
};
