const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const basic = require("./response.json");
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'punch':
				if(message.mentions.users.first().id !== package.ownerID){
					return 'You have punched <@' + user + '>';
				} else {
					return "you can't hurt him you pleblord.";
				}
				break;
		}
	});

	client.on('ready', () => {
		require("./../console.js").cmdloaded("s!punch");
	})


	client.login(token.discord);
}
