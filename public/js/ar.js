// initial scales for each 3d model
var objScales = {
	Giraffe: '0.225 0.225 0.225',
	SOL: '0.7 0.7 0.7',
};

/**
 * Sets the model based on the user's choice in picker.hbs
 */
function setModel() {
	// get the name of the model being shown
	let model = document.querySelector('footer button:first-child').value;
	// get reference to ar.html document
	let iframe = document.querySelector('iframe').contentWindow.document;
	// set the source and scale for AR in ar.html
	let modelSrc = `models/${model.toLowerCase()}/scene.gltf`;
	let atts = iframe.querySelector('#obj').attributes;
	for (var i = 0; i < atts.length; i++) {
		let att = atts[i];
		// set the file source for A-Frame
		if (att.name == 'gltf-model') att.value = modelSrc;
		// set the initial scale of 3d model
		if (att.name == 'scale') att.value = objScales[model];
	}
}

window.addEventListener('load', setModel, true);
