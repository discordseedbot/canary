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
				data.push(guild.iconURL)
				var evalEmbed = new Discord.RichEmbed()
					.setTitle("Guild Info")
					.addField("Guild Name", data[0], true)
					.addField("Guild ID", data[1], true)
					.addField("Guild Creation Date", data[2], true)
					.addField("Member Count", data[3], true)
					.addField("Owner", data[4], true)
					.addField("Role Count", data[5], true)
					.addField("Challen Count", data[6], true)
					.setAuthor(prefix+command)
					.setTimestamp()
					.setThumbnail(data[7])

				message.channel.send(data);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!serverinfo");
	})


	client.login(token.discord);
}
