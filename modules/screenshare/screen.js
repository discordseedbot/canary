const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'screenshare':
				var currentGuildID = bot.guilds.get(message.guild.id).id;
				var response = new Discord.RichEmbed()
					.setColor(require("./../functions/main.js").randomhexcolor())
					.setTitle("Voice Chat Screen Share")
					.setDescription("To screenshare in your current voice chat channel then [click here]("+screensharelink+")")
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!sreenshare");
	})


	client.login(token.discord);
}
