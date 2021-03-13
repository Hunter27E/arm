function closeModal() {
	document.getElementById('modal').style.display = 'none';
	document
		.querySelector('#options i')
		.removeEventListener('click', closeModal, true);
}

function openModal() {
	document.getElementById('modal').style.display = 'flex';
	document
		.querySelector('#options i')
		.addEventListener('click', closeModal, true);
}

function loadListeners() {
	// hamburger menu button
	document.querySelector('nav i').addEventListener('click', openModal, true);
}

window.addEventListener('load', loadListeners, true);
