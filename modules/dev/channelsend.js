const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").dev;
const package = require('./../../package.json');

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'channelsend':
				let channelid = args.slice(0).join(' ').split(' ')[0];
				let content = args.slice(1).join(' ');
				let msg = channelid && " " && content;
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
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~channelsend");
	})


	client.login(token.discord);
}
