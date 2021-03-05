// GET ARM home page

const buttonNames = require('../public/data/buttonsN.json');

exports.view = function (req, res) {
	// data to pass to template
	let data = {};
	data.btns = buttonNames;
	data.layout = 'index';
	// console.log(data);
	res.render('index', data);
};
