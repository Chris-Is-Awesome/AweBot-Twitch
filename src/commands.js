module.exports = {

	// Whoops a Howard into the barn if good RNG, otherwise get rekt :)
	Whoop: function (client, channel, tags) {

		// Chance
		const random = Math.floor(Math.random() * 101);
		const goatInChance = 10;
		console.log("Whoop RNG: " + random);

		// Goat in
		if (random <= goatInChance) {
			client.say(channel, tags['display-name'] + " GOAT IN!");
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

			client.say(channel, tags['display-name'] + " " + failureResults[Math.floor(Math.random() * failureResults.length)]);
		}
	}
}