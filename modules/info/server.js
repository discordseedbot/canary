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
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'serverinfo':
				//var guildUserCount = guild.members.filter(member => !memger.user.bot).size;
				//var guildOwner = guild.owner.user.uername + "#" + guild.owner.discriminator;
				//var data = [guild.name, guild.id, guild.createdAt, guildUserCount, guildOwner, guildUSerCount, guild.roles.count, guild.channels.count];
				var data = [];
				data.push(guild.name);
				data.push(guild.id);
				data.push(guild.createdAt);
				data.push(guild.members.filter(member => !member.user.bot).size);
				data.push(guild.owner.user.uername + "#" + guild.owner.discriminator);
				data.push(guild.roles.count);
				data.push(guild.channels.count);

				message.channel.send(data);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!serverinfo");
	})


	client.login(token.discord);
}
