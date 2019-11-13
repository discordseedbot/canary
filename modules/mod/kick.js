const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function(message, client) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the kick.'); break; }
	if (message.mentions.userToKick.size < 1) { message.reply('You must mention someone to kick them.'); break; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); break; };
	if (!message.member.permissions.has('KICK_MEMBERS')) {message.reply('You do not have permissions to kick.'); break;}
	if (!client.guild.me.permissions.has('KICK_MEMBERS')) {message.reply("I don't have permission to kick!"); break;}
	message.guild.member(userToKick).kick();

	kickedUserID = message.mentions.users.first().id;

	message.channel.send({embed: {
		color: 770000,
		author: {name:'Kicked User'},
		fields: [{
		name: 'Reason // ' + user + ' has been Kicked',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Kicked at ' + new Date(),
			footer: {
			text: 'Kicked by ' + message.author.username,
		}
	}});
	client.channels.get(userToKick).send({embed: {
		color: 770000,
		author: {name:'Kicked User'},
		fields: [{
		name: 'Reason // ' + user + ' Kicked',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Kicked at ' + new Date(),
			footer: {
			text: 'Kicked by ' + message.author.username,
		}
	}});
}
















