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
			case 'invite':
				let evalEmbed = new Discord.RichEmbed()
					.setColor(require("./../functions/main.js").randomhexcolor())
					.setTitle(response.invite.title)
					.setDescription(response.invite.desc)
					.setTimestamp()
				message.channel.send(evalEmbed);
				break;
		}
	});

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!invite");
	})


	client.login(token.discord);
}