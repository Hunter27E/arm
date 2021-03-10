/**
 * Sets the model based on the user's choice in picker.hbs
 */
function setModel() {
	// get the name of the model to show
	let model = document.querySelector('footer button:first-child').value;
	console.log('model = ' + model);
	// get reference to ar.html document
	let iframe = document.querySelector('iframe').contentWindow.document;
	// set the source for AR in ar.html
	let modelSrc = `models/${model.toLowerCase()}/scene.gltf`;
	iframe.querySelector('#obj').setAttribute('gltf-model', modelSrc);
	let x = iframe.querySelector('#obj').attributes;
	for (var i = 0; i < x.length; i++) {
		if (x[i].name == 'gltf-model') {
			x[i].value = modelSrc;
		}
		console.log(`${x[i].name} = ${x[i].value}`);
	}
}

window.addEventListener('load', setModel, true);
