const Discord = require("discord.js"); 
const { RichEmbed } = require("discord.js"); 
const package = require('./../../package.json');

module.exports.cmd = function(message, client, args) {
	var channelid = args.slice(0).join(' ').split(' ')[0];
	var content = args.slice(1).join(' ');
	var msg = channelid && " " && content;
	if (message.author.id === package.ownerID) {
		if (msg.length < 1) {
			//Send message with incorrect arguments error
			let evalEmbed = new Discord.RichEmbed()
				.setColor('#ff0000')
				.setTitle('Message Fail!')
				.setAuthor('Syntax Error')
				.setTimestamp()
				.setDescription("No message or channel ID was stated. the correct syntax is \n`s~channelsend channelid messagecontent`");
			message.channel.send(evalEmbed);
		}
		if (msg.length > 1) {
			//yay it finally sends the fucking command
			client.channels.get(channelid).send(content);

			let evalEmbed = new Discord.RichEmbed()
				.setColor('#90d190')
				.setTitle('Message Sent!')
				.setTimestamp()
				.setDescription("Message has been sent to the channelID of;\n ``" + channelid + "``\n\n And with the content of;\n``" + content + "``");
			message.channel.send(evalEmbed);
		}
	}else{
		message.reply("You do not have permission to use this command.");
	}
}