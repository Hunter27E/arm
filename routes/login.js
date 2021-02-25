
exports.view = function (req, res) {
	let info = {};
	info.layout = 'login';
	res.render('login', info);
};
