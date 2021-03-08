var facts = {
	Giraffe: {
		Giraffe:
			'Giraffes live on Earth, but come from Mars. They used to fly but now they walk.',
		Neck:
			'Giraffes have 6 foot long necks, but they still are not long enough to reach the ground',
		Spots:
			"No two giraffes have the same spot pattern, they are all unique. They also help regulate the giraffe's body temperature!",
		Speed:
			'Giraffes can run at speeds of up to 37mph over short distances and 10mph over long distances.',
		Sleep: 'Giraffes sleep and give birth standing up.',
		Tongue:
			'Giraffes have 20 inch long tongues, and they are prehensile meaning they can grab things with it!',
		Diet: 'Giraffes mostly eat acacia off tall trees.',
		Eyes:
			'Giraffes have eyes on the sides of their hide to give them panoramic vision, allowing them to see their predators more easily.',
		Ears:
			'Giraffes do not make audible sounds that humans can hear, in fact they hardly use their hearing. They rely heavily on their vision.',
		Hooves: 'Giraffes have two hooves on each foot like antelopes and hippos.',
	},
	SOL: {
		SOL:
			'The full name of the Statue of Liberty is Liberty Enlightening the World.',
		Lady:
			'The Statue of Liberty represents Libertas, the Roman goddess of freedom',
		Gift: 'France gifted the statue to the U.S in 1886.',
		Shoes: 'Lady Liberty wears a size 879 shoe! Absolutely massive!',
		Size:
			'From the ground to the tip of the torch, the statue is 93 meters tall. It weighs 204 metric tons.',
		Waist: "Liberty's waistline is 35 feet. That's 420 inches!",
		Stairs:
			'To get to the crown of the statue, you must climb 354 stairs. Make sure to bring your water.',
		Crown: "There are 25 windows to look out of in the statue's crown.",
		Visitors:
			'About 4.5 million people visit the statue every year. Almost as much as the Eiffel Tower which gets 4.5 million visitor per year!',
		Build:
			'The interior of the statue is made of iron and the exterior is made of copper.',
		Color:
			'Liberty used to be copper color, however due to oxidation she is now green. This green coating protects the statue from deterioration.',
	},
};

var switchFact = (e) => {
	// get info box that will be changed
	let info = document.getElementById('info');
	// get info to identify the new fact to be displayed
	let exhibit = document.querySelector('footer button:first-child').value;
	let part = e.target.value;
	// get the new fact
	let newFact = facts[exhibit][part];
	info.innerHTML = newFact;
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
