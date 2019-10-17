const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const tokens = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'ban':
				let reason = args.slice(1).join(' ');
				let userToKick = message.mentions.users.first();
				if (reason.length < 1) { message.reply('You must supply a reason for the ban.'); break; }
				if (message.mentions.userToKick.size < 1) { message.reply('You must mention someone to kick them.'); break; }

				if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); break; };
				if (!message.member.permissions.has('BAN_MEMBERS')) {message.reply('You do not have permissions to ban.'); break;}
				if (!client.guild.me.permissions.has('BAN_MEMBERS')) {message.reply("I don't have permission to ban!"); break;}
				message.guild.member(userToKick).ban();

				kickedUserID = message.mentions.users.first().id;

				message.channel.send({embed: {
					color: 770000,
					author: {name:'Banned User'},
					fields: [{
					name: 'Reason // ' + user + ' has been Banned',
					value: 'Reason:\n ' + reason
					}],
						timestamp: 'Banned at ' + new Date(),
						footer: {
						text: 'Banned by ' + message.author.username,
					}
				}});
				client.channels.get(userToKick).send({embed: {
					color: 770000,
					author: {name:'Banned User'},
					fields: [{
					name: 'Reason // ' + user + ' Banned',
					value: 'Reason:\n ' + reason
					}],
						timestamp: 'Banned at ' + new Date(),
						footer: {
						text: 'Banned by ' + message.author.username,
					}
				}});
				break;
		}
	});

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!ban");
	});


	client.login(token.discord);
}
















