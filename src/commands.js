module.exports = {

	// Whoops a Howard into the barn if good RNG, otherwise get rekt :)
	Whoop: function (client, channel, tags) {
		client.say(channel, tags.username + " whooped!");
	}

}