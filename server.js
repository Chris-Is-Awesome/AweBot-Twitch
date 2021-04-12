require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const commands = {
	website: {
		response: 'test'
	},
	upvote: {
		response: (user) => `User ${user} was just upvoted!`
	}
}

const client = new tmi.Client({
	connection: { reconnect: true },
	identity: { // Bot account
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'chrisisawesome' ] // Channel to listen to
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	if (self) return;

	const [raw, command, argument] = message.match(regexpCommand);

	const { response } = commands[command] || {};

	if (typeof response === 'function') {
		client.say(channel, response(tags.username));
	} else if (typeof response === 'string') {
		client.say(channel, response);
	}

	// "Alca: Hello, world!"
	console.log(`${tags['display-name']}: ${message}`);
});