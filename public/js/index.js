var switchFact = (e) => {
	let info = document.getElementById('info');
	let newInfo = e.target.value;
	switch (newInfo) {
		case 'Giraffe':
			newInfo =
				'Giraffes live on Earth, but come from Mars. They used to fly but now they walk.';
			break;
		case 'Neck':
			newInfo =
				'Giraffes have 6 foot long necks, but they still are not long enough to reach the ground';
			break;
		case 'Spots':
			newInfo =
				"No two giraffes have the same spot pattern, they are all unique. They also help regulate the giraffe's body temperature!";
			break;
		case 'Speed':
			newInfo =
				'Giraffes can run at speeds of up to 37mph over short distances and 10mph over long distances.';
			break;
		case 'Sleep':
			newInfo = 'Giraffes sleep and give birth standing up.';
			break;
		case 'Tongue':
			newInfo =
				'Giraffes have 20 inch long tongues, and they are prehensile meaning they can grab things with it!';
			break;
		case 'Diet':
			newInfo = 'Giraffes mostly eat acacia off tall trees.';
			break;
		case 'Eyes':
			newInfo =
				'Giraffes have eyes on the sides of their hide to give them panoramic vision, allowing them to see their predators more easily.';
			break;
		case 'Ears':
			newInfo =
				'Giraffes do not make audible sounds that humans can hear, in fact they hardly use their hearing. They rely heavily on their vision.';
			break;
		case 'Hooves':
			newInfo =
				'Giraffes have two hooves on each foot like antelopes and hippos.';
			break;
		default:
			break;
	}
	info.innerHTML = newInfo;
};

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
	let ar_buttons = document.querySelectorAll('footer button');
	ar_buttons.forEach((btn) => {
		btn.addEventListener('click', switchFact, true);
	});
	document.querySelector('nav i').addEventListener('click', openModal, true);
}

window.addEventListener('load', loadListeners, true);
