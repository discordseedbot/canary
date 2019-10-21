const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const response = require("./response.json");
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'avatar':
				let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
				if (message.mentions.users.size > 0) {
					message.channel.send(`Avatar for, **${message.mentions.users.first().username}:**\n${avatar}`);
				} else {
					message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
				}
				break;
		}
	});

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!help");
	})


	client.login(token.discord);
}
