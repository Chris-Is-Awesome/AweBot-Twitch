require('dotenv').config();

// Imports
const tmi = require('tmi.js');
const commands = require('./commands.js');

// Client setup
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

client.on('raided', (channel, username, viewers) => {
	client.say(channel, "[Test] A raid happened! Woah!!! Now everyone, get in the barn!");
})

// Fires when a message is sent to the channel
client.on('message', (channel, tags, message, self) => {

	console.log(`${tags['display-name']}: ${message}`);

	if (self || !message.startsWith('!')) return; // Return if bot or not command

	// Get ccommand & argument(s)
	const command = message.indexOf(' ') >= 0 ? message.substr(1, message.indexOf(' ') - 1).toLowerCase() : message.slice(1).toLowerCase();
	const args = message.indexOf(' ') >= 0 ? message.slice(message.indexOf(' ') + 1).split(' ') : [];

	console.log(`${tags['display-name']} is attempting to run command ${command} with ${args.length} argument(s)`);

	let output = "";
	let reply = true;

	// Execute valid commands
	switch (command) {
		case "whoop":
			output = commands.Whoop();
			break;
		case "bff":
			output = commands.Bff();
			break;
		case "randnum":
			output = commands.PickANumber(args);
			break;
		case "coinflip":
		case "flipcoin":
			output = commands.FlipCoin();
			break;
		case "trivia":
			output = commands.Trivia();
			reply = false;
			break;
		default:
			return;
	}

	if (reply) {
		client.say(channel, tags['display-name'] + " " + output);
	}
	else {
		client.say(channel, output);
	}

});