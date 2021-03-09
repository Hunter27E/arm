// GET ARM home page

const ardata = require('../public/data/ardata.json');

exports.view = function (req, res) {
	// get name of model to show user
	let exhibit = req.query.model;
	// data to pass to template
	let data = {};
	data.btns = ardata[exhibit];
	data.initialFact = data.btns.buttons[0].fact;
	data.exhibit = exhibit;
	data.layout = 'index';
	// console.log(data);
	res.render('index', data);
};
