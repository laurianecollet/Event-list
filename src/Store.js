export const Store = {

	datas: {
		events: [
			{
				"type": "Concert",
				"intitule": "POWERDOVE",
				"description": "POWERDOVE (Pop song idéale chahutée par les musiques savantes et improvisées) Annie Lewandowski est une improvisatrice fameuse que l’on a notamment croisée aux scôtés de quelques héros immortels comme Fred Frith, Charles Hayward, ou Chris Cutler. Elle fut également de l’aventure des Curtains du génial Chris Cohen",
				"url": "https://yurplan.com/uploads/cover/bc7141c6dcf68ea4717a5e6d6bf93c4183688580.jpg",
				"nbbillet": 20,
				"payant": true,
				"prix": 9,
				"dateheure": "19/05/2017 à 18h",
				"lieu": "LE BAL DES FRINGANTS, 11 rue du Bon Pasteur, Lyon 1",
			},
			{
				"type": "Festival",
				"intitule": "Made.Festival Rennes",
				"description": "● BEAUJEAN ● CATS SOILED Live ● JUS - ED ● MÔME ● TAMA SUMO ● ZENKER BROTHERS",
				"url": "https://yurplan.com/uploads/cover/08f1d3fa23e62f4ce48d07bf0ead252590b7a3f4.jpg",
				"nbbillet": 100,
				"payant": true,
				"prix": 20,
				"dateheure": "18/05/2017 à 23h",
				"lieu": "1988 LIVE CLUB",
			},
			{
				"type": "Theatre",
				"intitule": "Au berceau des rêves",
				"description": "Les deux comédiennes, habitées par un grain de folie, sont là pour donner vie aux rêves. Le bébé-acteur de la Compagnie Abricadabra a pris rendez-vous avec elles pour interpréter ses rôles préférés et nous faire partager sa vie onirique. Voyages, magie et chansons, l'atelier des songes est plein de surprises !",
				"url": "https://yurplan.com/uploads/cover/195bad2d194134cc36e1506087f7462df3cfb297.jpg",
				"nbbillet": 50,
				"payant": true,
				"prix": 7,
				"dateheure": "21/05/2017 à 11h",
				"lieu": "Péniche Antipode face au 55 quai de la Seine 75019",
			},
			{
				"type": "Atelier",
				"intitule": "Atelier vins des Alpes françaises",
				"description": "Ateliers animés par Eric Esnault, diplômé du Wine & Spirit Education Trust, demi-finaliste du Concours du Meilleur Caviste de France 2014 et 2016",
				"url": "https://yurplan.com/uploads/cover/51b918b5bca258c40180815c5ff2a6286d575f1b.jpg",
				"nbbillet": 140,
				"payant": false,
				"prix": 45,
				"dateheure": "19/05/2017 à 19h45",
				"lieu": "Le Vin des Alpes 8 Rue de Strasbourg 38000 Grenoble",
			},
		],
		counter: 0,
		searchByPrice: ''
	},
	majfunction(string) { // ca ne marche pas
		console.log('coucou')
		return string.charAt(0).toUpperCase() + string.slice(1);
	},
	search() { // probleme dans l'affichage ...
		let tab = [];
		let reg = new RegExp(this.datas.searchByPrice, "i");

		if (this.datas.searchByPrice.length > 0) {
			tab = this.datas.events.filter((elt) => reg.test(parseInt(elt.prix)));
			console.log(tab)
		} else {
			tab = this.datas.events;
		}

		return tab;
		console.log(tab)

	},

}