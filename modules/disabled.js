module.exports.cmd = function(prefix, commandname) {
	
}


const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");

module.exports.cmd = function(prefix, commandname) {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case commandname:
				let evalEmbed = new Discord.RichEmbed()
					.setColor('#ff0000')
					.setTitle('Command Disabled')
					.setDescription("Sorry but the command `" + prefix + commandname + "` has been disabled until a later update, Sorry!")
					.setTimestamp();
				message.channel.send(evalEmbed);
				break;
		}
	})

	client.on('ready', () => {
		require("./functions/console.js").cmdloaded("command");
	})


	client.login(token.discord);
}
