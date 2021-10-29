﻿module.exports = {

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
				"the Colosseum of Fools was originally meant to be in Fungal Wastes.",
				"due to a glitch, if the map is used in the Colosseum, the Dirtmouth map is shown instead, with no Knight icon even with Compass.",
				"when the infection took over, many of the miners in Crystal Peak died and were reanimated. Their husks were imprinted with strong purpose, causing them to continue mining even after death.",
				"Crystal Peak was originally planned as part of the Forgotten Crossroads, where it was known as the 'Crystal Mines'.",
				"an optional difficult platforming area similar to the Path of Pain was planned for the Godmaster update, but was scrapped due to it taking away from the novelty of Path of Pain and being thematically disconnected from what Godmaster was about.",
				"the Pale King gave sentience to the bugs of Hollownest. If a bug wandered too far from Hollownest, they would lose their memories.",
				"due to a glitch with the physics, if the map is pulled out while being pushed by the wind in Howling Cliffs, the Knight will get pushed faster.",
				"the Hive was once ruled by a queen, but she eventually grew too large to leave the Hive and thus died.The Hive was left vulnerable to the infection.",
				"early in development, the Hive was located below Deepnest.",
				"the Failed Tramway was the result of a Tramway never being completed due to the ongoing conflict between Herrah and the Pale King.",
				"early in development, Kingdom's Edge was part of Deepnest. Deepnest was split in two after the removal of the Forest of Bones area. The east part was moved to the southeast of the map and eventually became Kingdom's Edge.This can still be seen in Kingdom's Edge's file names, which start with 'Deepnest_East'.",
				"the ash falling on Kingdom's Edge is from the decaying corpse of the Pale King's shell.",
				"during development, the Queen's Gardens was named the 'Royal Garden'.",
				"in the beta, the Ancestral Mound was called the 'Shrine of Souls'.",
				"to read the lore tablets in the Fungal Wastes, you need to have Spore Shroom equipped.",
				"while standing near a lore tablet with Spore Shroom equipped, the background music fades and a chorus of voices speaking the same gibberish that came from Mister Mushroom can be heard.",
				"in the White Palace, if you sit on the throne after hitting the Pale King's corpse out, a version of the Main Theme, the Royal Hollow Knight theme, plays. Sitting here does not act as a checkpoint, but you can swap charms.",
				"there was a cut charm named the Zote Charm, which would have made the Knight die in one hit.",
				"the cut Forest of Bones and Ant enemies appear to be making an appearance in Silksong.",
				"swimming was planned as a form of movement and there are some scrapped rooms that appear to be designed for swimming.",
				"Dream Diving was a planned feature where dream nailing an NPC would take you into their mind.The trailer for this feature shows you entering Elderbug's dream where you see a younger version of him. This feature was scrapped and replaced by the dream nail dialogues.",
				"the Knight's design is taken from Team Cherry's first game, Hungry Knight, which was made during a Ludom Dare game jam that started the company.",
				"if the Knight goes to Leg Eater after upgrading all the Fragile charms, Leg Eater will say he smells Divine and will travel North to find her.If you return to Divine, you'll see Leg Eater's dismembered claws on the floor and Divine will leave Dirtmouth.",
				"Leg Eater and Divine may be the same species.",
				"Leg Eater is blind but has a very strong sense of smell.",
				"Grimmchild, Weaversong and Glowing Womb treat Millibelle in her bank as an enemy and attempt to attack her, making her cower and not interact.Dreamshield will also hit her bank stand as if it was an enemy.",
				"Relic Seeker Lemm's voicelines, done by Leth, had to be re-recorded as Team Cherry told him that Lemm is supposed to be annoyed with the Knight. Lemm's old lines were reused for the Nailsmith.",
				"if you defeat White Defender 5 times, a statue of the knight is made in Dung Defender's place made of dung.",
				"while wearing the Defender's Crest charm, Remm will not accept any relics you try to sell him.",
				"Lemm is the author behind the description for the Void Idol.",
				"the combined sell price for all relics in the game is 21,650 geo.",
				"Sly had a different voice actor in the beta.",
				"East of Nailmaster Oro's house is an impaled corpse of a Great Hopper. Attacking it 25 times will cause 2 Great Hoppers to fall from the ceiling and attack the Knight.",
				"Cloth's club can be seen resting on the grave of the Traitor's Child in the background of the Traitor Lord fight in Godhome if she is killed in battle.",
				"Iselda refers to Cornifer with the nickname of 'Corny'.",
				"the Passing of the Age achievement is the only one without a monochrome color palette, instead featuring Mister Mushroom in full color.",
				"Zote's nail, the 'Life Ender', cannot deal damage as it is made of shellwood.",
				"in the Colosseum of Fools, when Zote begins his battle, the audience laughs at him.",
				"Hornet's needle was made especially for her, and no other bugs are skillful enough to wield it.",
				"an unused concept for Hornet's origins have her being the 'Child of Three Queens': born to Herrah, raised by the White Lady and trained under and named by Hive Queen Vespa.",
				"Hornet is a spider.",
				"when Grimm is fought in Godhome, he bows to the Godseeker rather than the Knight.",
				"Grimm is the only boss to have music variations and audio cues for some events.",
				"when using a spell in the secret room in Grimm's tent, a barrier appears around the device, hinting at some sort of seal.",
				"Grimmchild attacks the Hunter when he roars but stops after that.",
				"the accordian Brumm plays has limbs, implying that it's a dead or live bug.",
				"the journal entry for Nightmare King Grimm is a poem written by the Seer.",
				"in Godhome, whenever an arena is completed, the Godseeker looks to the sky during the transition. She will look at the Knight during combat in most situations, however, she looks at the boss instead in the following situations: Hornet's intros, Winged Nosk's intro, Grimm's intro, Pure Vessel's intro & outro, and Soul Master's rapid teleporting during transition to second phase.",
				"Dung Defender has thick fur under his shell.",
				"while Dung Defender sleeps, he can be heard occasionally muttering Isma's name among other unknown phrases.",
				"if Elderbug is ignored when first entering Dirtmouth, he calls after the Knight in surprise and, if listened to later, comments on this.",
				"Fluke Hermit is the only fluke that appears to have sentience and is able to speak.",
				"Midwife is the only NPC who can hurt the Knight but is never fought as an enemy.",
				"the music Nymm plays, Accordion Nymm, has the same melody as the Dirtmouth theme.",
				"for the Whide Lady's dialogue where she talks about Hornet, the game checks whether the King's Brand has been acquired before this dialogue is triggered, even though it is not possible to reach her without it.",
				"when using a spell in the White Lady's room, a protective seal surrounds her.",
				"Menderbug can't be read with the Dream Nail.",
				"Baldur Shell was originally going to be called 'Propede Shell'.",
				"using Shape of Unn in combination with Baldur Shell and Spore Shroom changes how the snail body of the Knight looks.",
				"wearing the Defender's Crest in the Pleasure House kitchen attracts small bugs.",
				"due to a glitch, Hatchlings spawned from Glowing Womb do not target Galien.",
				"due to a glitch, Hatclings spawned from Glowing Womb target False Knight's empty armor.",
				"if the Knight dies with Joni's Blessing equipped, the resulting Shade will have 1 mask of health.",
				"enemies in the Hive are friendly if you have Hiveblood equipped.",
				"when using the Shade Cloak with Sharp Shadow, the Knight turns into a six-eyed void creature for a single frame before reverting back to normal.",
				"the design of Nailmaster's Glory heavily resembles the head of the Nailmasters.",
				"the animation for a Weaverling spawning from the Weaversong charm shows it being woven out of thread.",
				"the pedestal that Dreamshield rests on has the Dream Nail dialogue: 'Protect yourself... You are our last...', which implies the charm was meant for the Seer who is the last of her tribe.",
				"blocking a hit with the Baldur Shell does not desatroy the Delicate Flower. However, the flower does get destroyed if damage is negated by Carefree Melody.",
				"the Infection has a sweet smell and taste to some bugs.",
				"the White Lady, Snail Shaman, Bardoon, the Seer, and Midwife can detect when you're trying to read their mind with the Dream Nail.",
				"if you Desolite Dive in front of the Mask Maker, it removes his mask revealing his face.",
				"Desolate Dive was originally named 'Tyrant's Fist'.",
				"there is an unused version of the Shade Soul sprite that consists of a mixture between a black Shade Soul and a white Vengeful Spirit.",
				"the original name for Mothwing Cloak was 'Mothdust Cloak'.",
				"collecting the Monarch Wings is one of the two triggers that causes the Forgotten Crossroads to become infected.",
				"the Monarch Wings is what was causing the wind in a portion of Ancient Basin.Collecting the wings stops the wind.",
				"the Monarch Wings were originally called 'Mantis Wings'.",
				"riding the Stagways breaks the Delicate Flower but riding the Tram does not.",
				"there is an unused key in the game's files called 'Waterways_Key', implying it was meant to open the Royal Waterways instead of using a Simple Key.",
				"despite Rancid Eggs being considered inedible, it is implied that both Tuk and Confessor Jiji eat them.",
				"there are 49 relics, a max of 101 Rancid Eggs, 46 Grubs, 168 journal entries, 16 Mask Shards, 9 Vessel Fragments, 6 Pale Ore, and 4 Simple Keys.",
				"Broken Vessel was originally located in Greenpath, but was later moved to Ancient Basin with Hornet replacing his place in Greenpath.",
				"upon defeat, Broken Vessel reaches out to the Knight before completely dying.",
				"Grimm has 4 legs while Nightmare King Grimm has 6 and longer horns.",
				"the Nightmare Heart in the background of the Nightmare King Grimm fight beasts faster as Grimm loses health and glows brighter.",
				"each time you defeat Grey Prince Zote, one additional candle around his statue lights up, to a maximum of 4. After the 10th victory, the statue turns gold.",
				"after you defeat Grey Prince Zote 4 times, Bretta leaves Dirtmouth entirely and cannot be found anywhere.",
				"Marmu was designed by William Pellen's mother.",
				"the Five Great Knights are: Ze'mer (the Grey Mourner), Dryya, Isma, Hegemol and Ogrim (Dung Defender).",
				"the Great Knight Ogrim (Dung Defender) seems to have had a romantic interest in one of theother Great Knights, Isma, but he was never able to visit her in her grove due to his duties as a Great Knight. Because of this, Ogrim is unaware of Isma's fate. Isma's Dream Nail dialogue reads: '...Ogrim... there's no time...'",
				"the Higher Beings are: The Pale King, The White Lady, The Radiance, The Nightmare Heart, Unn and the Void Entity.",
				"some bosses health increases as the nail is upgraded.This specifically applies to: Watcher Knights, Hive Knight, the Collector, Dung Defender, Grimm and all the dream bosses.",
				"despite the Vengefly King having an unlock text in the Hall of Gods, it is impossible to see it in-game as Vengefly King's statue is automatically unlocked.",
				"Gruz Mother was originally named 'Empress Muzznik'",
				"Absolute Radiance has a total of 2200 HP consiting of each phase respectively: 400, 450, 300, 750, 300.",
				"the Zotelings during The Eternal Ordeal are: Winged, Heavy, Hopping, Turret, Volatile, Lanky, Fluke, Head of Zote, and Zote's Curse.",
				"the 57 kills to unlock The Eternal Ordeal title screen is a reference to the 57 precepts of Zote.",
				"The Eternal Ordeal once had a mode selection for Attuned, Ascended, and Radiant modes as well as a switch for changing Dream variants. These assets are still in the game and are blocked by the statue, but can be seen in Unity.",
				"the Husk Guard near False Knight can break the cracked wall that leads to Glowing Womb if lured to the left side of the room and does the overhead attack.",
				"there are cut versions of the Lifeseed that have wings and could fly away from the Knight.",
				"there is a glitch where, if the Knight opens the map while a Mosscreep is moving upside-down towards the edge of a platform, it continues moving, off the platform and through the air.",
				"Mosskin and Volatile Mosskin are not damaged by Defender's Crest.",
				"Maskflies are close to going extinct, but the cause is not yet known.",
				"the Massive Moss Charger is 4 regular Moss Chargers all living together.",
				"the shell of a Durandoo and Duranda has a health value of 9,999, though it cannot be damaged.",
				"despite being unable to be Dream Nailed, Aluba have Dream Nail dialogue.",
				"hitting an Ooma with either Sharp Shadow or Dreamshield will cause their core to always shoot to the right, regardless of direction hit.",
				"all Winged Sentries drop 12 Geo, however one at the entrance to Isma's Grove drops 35.",
				"while Lance Sentries usually drop 12 Geo, there is one  in the Watcher's Spire that only drops 2 the first time it is killed.",
				"although Husk Dandies usually drop 9 Geo, there is one to the right of the Watcher's Spire bench that drops 25.",
				"There are 2 unused bench models which were cut from the game. One is a bench of skulls while the other is a more royal one which was meant for a cut Hornet room.",
				"the Cowardly Husk in the room where Lurien rests appears to have been her butler as evidenced by Dream Nail dialogue and his internal name of 'WATCHERS_BUTLER'.",
				"Pilflip is a palindrome.",
				"Flukemon have a unique animation that plays if they fall into water, where they cry out while slowly sinking into the water and eventually drowning.",
				"Furious Vengefly drop 20 Geo, however there is one on the east side of the False Knight arena that drops 55 the first time it's killed.",
				"Deephunters have a small mouth that reveals itself for a single frame when attacking.",
				"the Grub Mimic in the Colosseum of Fools cannot be Dream Nailed. When breaking the jar containing the Mimic, the audience laughs at the surprise of the Grub turning into a Mimic. However, if the Knight Dream Nailed the jar before breaking it, they do not laugh.",
				"the roar the Hunter uses is the same as Brooding Mawlek's.",
				"Wingmoulds technically have a health value of 999; however, this value is reset every time they reform, making them have effectively infinite health. If you hack the Knight's nail to do 999 damage in one hit, you can actually kill it. Upon death, a Wingmould drops 2 Geo and a Crawlid corpse drops.",
				"in the Abyss, a maximum of 5 Siblings can be actively chasing the Knight at once; if a sixth one is triggered, one of the current 5 persuing breaks away from the group and returns to idle state.",
				"in the second phase of the Sisters of Battle, the order you kill the Mantises in will always be the same: right, left, middle.",
			],
			"Ittle Dew 2": [
				"there are 3 scrapped or replaced status effects left in the game's assets: Courage, Curse and Fortune. They did not get far enough in development to be worthy of a unique texture, so were likely scrapped early on.",
				"the scrapped Courage effect prevents any negative status effect from afflicting Ittle for 60 seconds. This  was possibly replaced with Tome.",
				"the scrapped Curse effect prevents all drops from enemies for 10 seconds. The droptable still advances for the drops you don't get, so you do miss out on drops.",
				"the song named 'Meteor' is inspired by the 'Kraid's Lair' theme in the original Metroid. It directly referrences Metroid in the filename.",
				"the scrapped Fortune effect forces all enemies to leave a drop when killed. Lasts for 60 seconds. This was possibly replaced with Hearty or the Sunny Day weather event.",
				"there are level IV variants of some of Ittle's weapons, including Force Wand, Dynamite, and Ice Ring. Level IV Force Wand and Dynamite have unique effects associated with them.",
				"level IV Force Wand is the strongest (DPS) weapon in the game, dealing a total of 69 (nice) base damage. The next strongest (DPS) weapon is Ice Ring IV.",
				"the strongest (DPS) weapon in the game (excluding level IV items) is Ice Ring III",
				"Simulacrum has the most health of any enemy in the game, with 900 HP, more than double the 400 HP that 2nd place has, being Passel.",
				"That Guy is the only enemy with more than 32 HP to have an HP not rounted to the nearest tenth, having 384 HP.",
				"some normally invincible enemies have hardcoded HP amounts, despite not being hittable. These include: Mercury Jello (1), Dead Beets (14), and steel Hyperdusas and Skullnips as well as Napping Fly Larvae each having 10,000 HP",
				"the enemies with the lowest HP (1) are: Fishbun, Cowbun, and Arch Triangles.",
				"each of the Constructs found in the secret dungeouns have names: Marina (Jenny), Boris (Biadlo), and Sam (Lenny)",
				"Brutus are the strongest common overworld enemy by far, having 120 HP. The runner ups are Chilly Rogers, Large Oglers, Slayer Jennies, and Gold Spikebuns each having 80 HP.",
				"you can kill the 2nd phase of the Napping Fly with only Force Wand despite her being immune to any attack other than Dynamite.",
				"Dark Oglers have an oversight where there is an extra EntityDroppable component on their root, causing them to have double the effect on the droptable despite only dropping 1 item. Chris hates this for hundo as if this wasn't the case, current route would get a useful lightning drop.",
				"'Avlopp' in Swedish translates to 'sewer' or 'drain'.",
				"the NPC you meet at the end of Syncope has the internal name of 'DreamRescueNPCOsalig'. 'Osalig' in Swedish translates to 'unsaved'.",
				"the sound clip that plays when a Fishbun moves is named 'Fishbun_Pain'. Is Ludo confirming Fishbuns feel pain?!",
				"Art Exhibit's floor reflection is a camera trick. The second camera is a flipped version of the main one.",
				"Sunny Day weather event affects item drops from enemies. For 10 seconds, there is an 80% chance to replace any heart drop with a lightning.",
				"there is an inacceisble room called the 'Test Room', which is internally named simiarly to a Portal World, 'Deep19'",
				"all Portal Worlds follow the naming convention of 'Deep##' with the '##' being the order in which they appear in an 'intended playthrough'. So Deep1 is Autumn Climb, Deep2 is The Vault, and so on. The only exception is The Promised Remedy, which has the name of 'Deep19s' as 'Deep19' is the inaccesible 'Test Room'",
				"in the vanilla game, you can access the debug menu with the following: While paused, hold left control and press the following: up, down, up, down, left, right, left, right (arrow keys), space. This menu only has 3 commands: 'warpto', 'setentvar', and 'setsavevar'.",
				"when creating a save file, if you name your file '2AbyssW/Thee' you will start with all the main items at their highest possible upgrades.",
				"the default string for signs and speech bubbles is: 'Hello world! What's up? It's a sign''",
				"the default string for cards is: 'Hello world,. what's up? Here's a tip for you: Get Out.'",
				"the default string for Tippsie's hint is: 'My, my, mister designer. Look who forgot to define a line for me to say here. You know what this means, so let's make it quick - no anesthetics this time.' This can be triggered in-game by pausing on the first frame of the fall animation when over a hole or spikes (any respawn event).",
				"Sweetwater Coast was originally named 'Candy Coast'.",
				"Pepperpain Prairie was originally named 'Vitamin Hills'",
				"Each of the Dream World dungeons had tentative names in their scene names based on the item they would focus on: DreamForce, DreamDynamite, DreamFireChain, DreamIce, DreamAll.",
				"Monochromes are spawned from a weather event named 'CaveSpider' implying they are spiders??",
				"Lockpicks are internally named 'MasterKeys'",
				"the snowboarding minigame is a buggy mess, having 3 unique softlocks involved with it as well as a potential lead to future 'wrong warping' tech for speedrunning. The mole can also just, not spawn, and trees and ramps can frequently overlap. You can also break the duck's animation when tricking.",
				"there is an unused green heart pickup that would have restored 3 hearts",
			],
			"the Metroid series": [
				"Samus was originally going to be able to crawl through gaps, but worried about the number of sprites it would require on the limited NES cartridge, Nintendo went with a simpler 'morph ball' sprite",
				"Samus was alluded to be either a robot or a male bounty hunter in the original NEStroid manual. Players would only find out about her true identity by beating the game in a short time.",
				"Gunpei Yokoi, the producer of several Metroid games, was also the designer of the Game Boy and invented the D-Pad",
				"the four 'big bosses' of Super Metroid can be beaten in any order, and there are actually speedruns to beat them in reverse order.",
				"most major items in Metroid: Zero Mission give an 'item get' jingle that is based off the same jingle in the original Metroid. However, the Fully Powered Suit has a unique jingle based off the one in Super Metroid, symbolizing how far the series has come since the original release.",
				"Samus Aran's biological parents are Rodney and Virginia Aran. Rodney died trying to prevent valuable Afloralite (important ship fuel) from falling into the Space Pirate's hands, and Virginia died protecting Samus.",
				"Despite canonically being made up of and led by various alien species, the Galactic Federation in Metroid has only ever been shown to have human members.",
			],
		}

		const keys = Object.keys(triviaData);
		const game = keys[Math.floor(Math.random() * keys.length)];

		const gameTrivia = triviaData[game];
		const trivia = gameTrivia[Math.floor(Math.random() * gameTrivia.length)];
		return "In " + game + ", " + trivia;
	}
}