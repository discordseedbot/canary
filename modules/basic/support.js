const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const response = require("./response.json");

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(require("./../functions/main.js").randomhexcolor())
		.setTitle(response.support.title)
		.setDescription(response.support.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
