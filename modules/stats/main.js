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
			case 'stats':
				require("./stats.js").cmd(message, args, client)
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("Stats");
	})


	client.login(token.discord);
}
