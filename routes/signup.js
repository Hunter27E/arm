exports.view = function (req, res) {
	let info = {};
	info.layout = 'signup';
	res.render('signup', info);
};
