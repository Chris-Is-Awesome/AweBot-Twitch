module.exports = {

	// Whoops a Howard into the barn if good RNG, otherwise get rekt :)
	Whoop: function () {

		// Chance
		const random = Math.floor(Math.random() * 101);
		const goatInChance = 10;
		console.log("Whoop RNG: " + random);

		// Goat in
		if (random <= goatInChance) {
			return " GOAT IN!";
		}
		// If bad goat
		else {
			const failureResults = [
				"[Backwards long jumps out of existence and crashes your game...]",
				"[Starts to go in, then backs out at last second...]",
				"[Stays sideways at entrance to barn so I don't even attempt to enter...]",
				"[Ignores your whoop...]",
				"[Randomly gets triggered and attacks you...]",
				"[Kicks you in the groin...]",
				"[Eats grass just to mock you...]",
				"[Sits down and grooms self...]",
				"[Faces the wrong way...]",
				"[Attempts to enter barn, but gets pushed out by other goats...]",
				"[Does a backflip...]",
				"[Runs in circles for hours before tackling you...]",
				"[Closes barn doors so no other goats can get in...]",
				"[Whoops you...]"
			];

			return failureResults[Math.floor(Math.random() * failureResults.length)];
		}
	},

	// Tells you who your best friend is
	Bff: function () {
		const friendsPerGame = {
			"The Legend of Zelda series": [ "Link", "Princess Zelda", "Ganondorf", "Tingle", "the Great Deku Tree", "Impa", "Beedle", "the Postman", "Epona", "Dampe", "the Great Fairy", "Eldin", "Lanayru", "Faron", "Skull Kid", "Dark Link", "Tetra" ],
			"The Legend of Zelda: Twilight Princess": [ "Hero's Spirit", "Impaz", "King Bulblin", "Midna", "Ooccoo", "Ooccoo Jr.", "Zant", "Beth", "Colin", "Fado", "Hanch", "Ilia", "Jaggle", "Malo", "Mayor Bo", "Ordona", "Pergie", "Rusl", "Sera", "Talo", "Uli", "Coro", "Ook", "Trill", "Barnes", "Luda", "Renado", "Shad", "Darbus", "Gor Amoto", "Gor Coron", "Gor Ebizo", "Gor Liggs", "Auru", "Falbi", "Fyer", "Plumm", "Hena", "Iza", "Purdy", "Prince Ralis", "Rutela", "Agitha", "Charlo", "Chudley", "Dr. Borville", "Gengle", "Hannah", "Jovani", "Kili", "Louise", "Madame Fanadi", "Misha", "Purlo", "Soal", "Telma", "Ashei", "Yeta", "Yeto", "Hugo", "Jamal", "Jake", "Leroy", "Deku Toad", "Death Sword", "Dangoro", "Twilit Bloat", "Darkhammer", "Twilit Parasite: Diababa", "Twilit Igniter: Fyrus", "Twilit Aquatic: Morpheel", "Twilit Fossil: Stallord", "Twilit Ice Mass: Blizzeta", "Twilit Arachnid: Armogohma", "Twilitm Dragon: Argorok", "Howard" ],
			"The Legend of Zelda: Skyward Sword": [ "Demise", "Groose", "Fi", "LD-301S Scrapper", "Levias", "Strich", "Batraeux", "Bertie", "Cawlin", "Croo", "Dovos", "Eagus", "Fledge", "Gaepora", "Gondo", "Goselle", "Greba", "Gully", "Henya", "Horg", "Horwell", "Janka", "Jakamar", "Karane", "Kukiel", "Luv", "Mallara", "Orielle", "Owlan", "Parrow", "Peater", "Peatrice", "Phoeni", "Piper", "Pipit", "Rupin", "Sparrot", "Toby", "Wyrna", "Keet", "Kina", "Pumm", "Rusta", "Dodoh", "Ghirahim", "Gorko", "Bucha", "Eria", "Lopsa", "Machi", "oolo", "Yerbal", "Bronzi", "Cobal", "Guld", "Kortz", "Ledd", "Merco", "Nackle", "Plats", "Silva", "Tubert", "Tyto", "Zanc", "Golo", "Gorttram", "LD-301N Skipper", "LD-002G Scervo", "LD-003D Dreadfuse", "Moldarch", "the Imprisoned", "Pyroclastic Fiend: Scaldera", "Ancient Automaton: Koloktos", "Abyssal Leviathan: Tentalus" ],
			"The Legend of Zelda: Ocarina of Time": [ "Ichiro", "Jiro", "Kaepora Gaebora", "Navi", "Pierre", "Rauru", "the Running Man", "Saburu", "Sheik", "Shiro", "Fado", "Mido", "Saria", "Madamu Yan", "the Poe Collector", "Professor Shikashi", "Ingo", "Malon", "Talon", "Biggoron", "Darunia", "Medigoron", "the Bean Seller", "Princess Ruto", "King Zora", "Lord Jabu-Jabu", "Bonooru", "Kotake", "Koume", "Nabooru", "Dead Hand", "Parasitic Armored Arachnid: Gohma", "Infernal Dinosaur: King Dodongo", "Bio-Electric Anemone: Barinade", "Evil Spirit from Beyond: Phantom Ganon", "Subterranean Lava Dragon: Volvagia", "Giant Aquatic Amoeba: Morpha", "Phantom Shadow Beast: Bongo Bongo", "Sorceress Sisters: Twinrova" ],
			"The Legend of Zelda: The Wind Waker": [ "Mothula", "Phantom Ganon", "Gohma", "Kalle Demos", "Gohdan, the Great Arbiter", "the Monstrous Helmaroc King", "Jalhalla, Protector of the Seal", "Molgera, Protector of the Seal", "Puppet Ganon", "Cyclos", "Daphnes Nohansen Hyrule", "Fado", "the Queen of the Fairies", "Fishman", "Gonzo", "the King of Red Lions", "Laruto", "Loot", "Mako", "Niko", "Nudge", "Old Man Ho Ho", "the Salvage Corp", "Senza","Zephos", "Zuko", "Abe", "Aryll", "Grandma", "Jabun", "Joel", "Mesa", "Link (the pig)", "Orca", "Rose", "Sturgeon", "Sue-Belle", "Zill", "Anton", "Candy", "Dampa", "Doc Bandam", "Garrickson", "Gillian", "Gossack", "Gummy", "Joanna", "Kamo", "Kane", "Kreeb", "Lenzo", "Linda", "Maggie", "Maggie's Father", "Mila", "Mila's Father", "Minenco", "Missy", "Mrs. Marie", "Pompie", "Vera", "Potova", "Salvatore", "Tott", "Zunari", "Sam", "Ivan", "Jun-Roberto", "Jin", "Jan", "Baito", "Basht",  "Bisht", "Hoskit", "Koboli", "Kogoli", "Medli", "Namali", "Obil", "Pashli", "Komali", "Quill", "the Rito Chieftain", "Skett", "Akoot", "Willi", "Valoo", "Aldo", "Carlov", "Drona", "Elma", "Hollo", "Irch", "Linder", "Manny", "Oakin", "Olivio", "Rown", "Makar", "Ankle", "David Jr.", "Knuckle" ],
			"The Legend of Zelda: A Link Between Worlds": [ "Yuga", "Margomil", "Gemasaur King", "Arrghus", "Knucklemaster", "Stalblind", "Zaganaga", "Dharkstare", "Grinexx", "Gramps", "Princess Hilda", "Gulley", "Seres", "Osfala", "Irene", "Oren", "Rosso", "the Blacksmith", "the Blacksmith's Wife", "Sahasrahla", "Mother Maiamai", "Thief Girl", "the Bee Guy", "Ravio" ],
			"The Legend of Zelda: Breath of the Wild": [ "a Hinox", "a Talus", "a Molduga", "a Stalnox", "Windblight Ganon", "Fireblight Ganon", "Thunderblight Ganon", "Calamity Ganon", "Waterblight Ganon", "Urbosa", "Mipha", "Revali", "Daruk", "Kilton", "Kass", "Hetsu", "King Rhoam", "Robbie", "Yunobo", "Riju", "Master Kohga", "Sidon", "Paya" ],
			"The Legend of Zelda: Phantom Hourglass": [ "Blaaz", "Cyclok", "Crayk", "Dongorongo", "Gleeok", "Eox", "Bellum", "Bellumbeck", "Oshus", "Linebeck", "Ciela", "Leaf", "Neri", "Astrid", "Biggoron", "Salvatore", "Jolene" ],
			"The Legend of Zelda: Spirit Tracks": [ "Mothula", "Stagnox", "Fraaz", "Phytops", "Cragma", "Byrne", "Skeldritch", "Cole", "Malladus", "Rael", "Anjean", "Ferrus", "Alfonzo", "Niko", "Linebeck III", "Joynas", "Bunnio", "Honcho" ],
			"the Witcher 3": ["Geralt of Rivia", "Keira Metz", "Vesemir", "Dandelion", "Ciri of Cintra", "Yennefer of Vengerberg", "Eskel", "Triss Merigold", "Gaunter O'Dimm", "Eredin", "Dijkstra"],
			"the Ittle Dew series": ["Ittle", "Tippsie", "Apathetic Frog", "Old Man"],
			"Ittle Dew": ["Ultra Fishbunjin 3000", "Jenny Bird", "Jenny Bunny", "Lichious Turnip", "Itan Carver", "Masked Ruby", "Jenny Fox", "Jenny Deer", "Jenny Frog", "Jenny Tiger"],
			"Ittle Dew 2": ["Cyber Jenny", "Osalig", "Jenny Cat", "Jenny Mermaid", "Jenny Mole", "Le Biadlo", "Lenny", "Mapman", "Safety Jenny", "Slayer Jenny", "Simulacrum", "Rich Turnip", "Passel Carver", "Mechabun", "Jenny Berry", "Jenny Bun", "Magic Crystal", "Jenny Lemon", "Jenny Shark", "Apathetic Jenny", "Jenny Flower", "Conrstruct ", "Dream Rock", "Business Casual Man", "That Guy"],
			"Paper Mario: The Thousand-Year Door": ["Admiral Bobbery", "Madame Flurrie", "Marilyn", "Beldam", "Merlon", "Bumpty", "Ms. Mowz", "Pennington", "Flavio", "Goombella", "Shadow Queen", "Heff T.", "Jolene", "Vivian", "Koops", "Yoshi", "Puni", "Rawk Hawk", "Professor Frankly"],
			"the Ori series": [ "Ori", "Gumo", "Sein", "Naru", "Ku", "Kuro" ],
			"Ori and the Will of the Wisps": [ "Baur", "Grom", "Motay", "Opher", "Seir", "Shriek", "Kil", "Kwolok", "Lupo", "Twillen", "Tuley", "Tokk", "Mora", "Mokk the Brave", "Howl" ],
			"A Hat in Time": [ "Badge Seller", "Mustache Girl", "DJ Grooves", "the Conductor", "Hat Kid", "Toilet of Doom", "the Snatcher", "Mafia Boss", "Bow Kid", "Queen Vanessa", "The Empress", "Bow Kid", "the Walrus Captain" ],
			"Celeste": [ "Madeline", "Theo", "Badeline", "Granny", "Mr. Oshiro", "Bird", "Alex", "Carlos" ],
			"Stardew Valley": [ "Alex", "Elliot", "Harvey", "Sam", "Sebastian", "Shane", "Abigail", "Emily", "Haley", "Leah", "Maru", "Penny", "Caroline", "Cint", "Demetrius", "Dwarf", "Evelyn", "George", "Gus", "Jas", "Jodi", "Kent", "Krobus", "Leo", "Lewis", "Linus", "Marnie", "Pam", "Pierre", "Robin", "Sandy", "Vincent", "Willy", "Wizard", "Grandpa", "Mr. Qi" ],
			"Hollow Knight": [ "Charm Lover Salubra", "Iselda", "Millibelle the Banker", "Leg Eater", "Sly", "the Last Stag", "Relic Seeker Lemm", "Cloth", "Cornifer", "Hornet", "Mister Mushroom", "Quirrel", "Tiso", "Zote the Mighty", "Bretta", "Grubfather", "Seer", "Troupe Master Grimm", "Dung Defender", "Elderbug", "Eternal Emilitia", "the Mask Maker", "Midwife", "Snail Shaman", "White Lady", "the Collector", "Brooding Mawlek", "Crystal Guardian", "Broken Vessel", "False Knight", "Flukemarm", "Gruz Mother", "God Tamer", "Hive Knight", "Hollow Knight", "the Mantis Lords", "Nosk", "the Radiance", "Uumuu", "Soul Master", "Watcher Knight", "Elder Hu", "Galien", "Gorb", "Markoth", "Marmu", "No Eyes", "Xero", "Winged Nosk", "White Defender", "Soul Tyrant", "the Sisters of Battle", "Hornet Sentinel", "Lost Kin", "Nightmare King Grim", "Pure Vessel", "Grey Prince Zote", "Failed Champion", "Enranged Guardian", "the Absolute Radiance", "the Knight" ],
			"Hyrule Warriors": [ "Lana", "Cia", "Volga", "Wizzro", "Linkle", "Proxi" ],
			"the Mario series": [ "Mario", "Luigi", "Bowser", "Princess Peach", "Princess Daisy", "Toad", "Toadsworth", "Yoshi", "King Boo", "Rosalina", "Bowser Jr.", "Pauline", "Toadette", "Captain Toad", "Wario", "Kamek", "Waluigi", "Donkey Kong", "Diddy Kong", "Birdo", "Nabbit", "Cappy", "F.L.U.D.D." ],
			"the Portal series": [ "Chell", "GLaDOS", "Wheatley", "a Companion Cube", "Cave Johnson", "ATLAS", "P-body" ],
			"the Metroid series": [ "Samus Aran", "Kraid", "Ridley", "Deorem", "Mua", "Imango", "Adam" ],
			"Blue Fire": [ "Umbra", "Von", "Orip", "Burok", "Fara", "Barri", "Paulale", "Kin", "Orom", "Nuno", "Mon", "Onari", "Nilo", "Mia", "Leech", "Dweller", "Forest Dweller", "Steam House Dweller", "Gruh, the Corrupted Guardian", "Croh, the Corrupted Guardian", "Sirion, Lord of Flames", "Samael, Grotesque Lord", "Beira,  Lady of Ice", "The Queen of Darkness", "Spirit Hunter", "Mork", "Poi", "Nuos, God of Knowledge", "Uthas, God of Water", "Dina, Goddess of Land", "Tolon, God of Win", "Duron, God of Fire", "the Sixth God" ],
			"The Darkest Tales": [ "Teddy", "Lightie", "Alicia", "Red Riding Hood" ]
		}

		const endSentences = [
			"May this friendship be long and prosperous!",
			"Now don't go killing each other...",
			"May you two live happily ever after!",
			"The two of you are inseparable!",
			"Truly the bestest of friends!"
		];

		const keys = Object.keys(friendsPerGame);
		const game = keys[Math.floor(Math.random() * keys.length)];
		const friend = friendsPerGame[game][Math.floor(Math.random() * friendsPerGame[game].length)];
		const endSentence = endSentences[Math.floor(Math.random() * endSentences.length)];

		if (game == "The Legend of Zelda: Twilight Princess" && friend == "Howard") {
			return " Your new best friend is -- me?! W-Why this is such an honor to be appreciated so much! ❤️";
		}

		return " Your new best friend is " + friend + " from " + game + "! " + endSentence;
	},

	// Pick a number (args: min, max)
	PickANumber: function(args) {
		const min = parseInt(args[0]);
		const max = parseInt(args[1]);
		const limit = 1000000;

		if ((args.length < 2 || isNaN(min) || isNaN(max)) || min > limit || max > limit) {
			return "2 numbers must be specified (min, max)";
		}

		const randNum = parseInt(Math.random() * (max - min) + min);
		return "The random number is: " + randNum;
	},

	FlipCoin: function() {
		if (Math.random() > 0.5) {
			return "Heads!";
		}

		return "Tails!";
	},

	Trivia: function() {
		const triviaData = {
			"Hollow Knight": [
				"the Abyss ambience is the Main Menu theme distored and slowed down.",
				"the City of Tears was originally named 'The Ruined City'.",
				"the rain in the City of Tears comes from a leak in the cavern's ceiling from the Blue Lake, giving the city its current name.",
				"the audience during the Colosseum trials laugh in specific situations, including: When the Knight dies, During the Zote fight, and after revealing the Grub Mimic.",
				"the Colosseum of Fools was originally meant to be in Fungal Wastes."
			],
			"Ittle Dew 2": [
				"something"
			]
		}

		const keys = Object.keys(triviaData);
		const game = keys[Math.floor(Math.random() * keys.length)];

		const gameTrivia = triviaData[game];
		const trivia = gameTrivia[Math.floor(Math.random() * gameTrivia.length)];
		return "In " + game + ", " + trivia;
	}
}