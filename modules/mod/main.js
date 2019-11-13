const Discord = require("discord.js"); 
const { RichEmbed } = require("discord.js"); 
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.init = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'kick':
				require('./kick.js').cmd(message, client, args);
				break;
			case 'ban':
				require('./ban.js').cmd(message, client);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("Moderation Commands");
	})

	client.login(token.discord);
}

