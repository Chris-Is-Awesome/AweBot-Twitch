require('dotenv').config();

const tmi = require('tmi.js');
const commands = require('./commands.js');

const client = new tmi.Client({
	connection: { reconnect: true },
	// Bot info
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'chrisisawesome' ] // Channel to join
});

client.connect(); // Connect to Twitch

// Fires when a message is sent to the channel
client.on('message', (channel, tags, message, self) => {

	console.log(`${tags['display-name']}: ${message}`);

	if (self || !message.startsWith('!')) return; // Return if bot or not command

	// Get ccommand & argument(s)
	const command = message.indexOf(' ') >= 0 ? message.substr(1, message.indexOf(' ') - 1).toLowerCase() : message.slice(1).toLowerCase();
	const args = message.indexOf(' ') >= 0 ? message.slice(message.indexOf(' ') + 1).split(' ') : [];

	console.log(`${tags['display-name']} is attempting to run command ${command} with ${args.length} argument(s)`);

	// Execute valid commands
	switch (command) {
		case "whoop":
			commands.Whoop(client, channel, tags);
			break;
	}

});