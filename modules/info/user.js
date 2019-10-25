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
			case 'userinfo':
				var user;
				var userArgs = args.slice(0).join(" ");
				if (userArgs.length > 1){
					user = message.mentions.users.first(); console.log("hi");
				} else { user = message.author; console.log("no")}
				const data = [];
				data.push("<@"+user.id+">");
				data.push(user.id);
				data.push(user.createdAt);
				data.push(user.presence.status);
				data.push(user.avatarURL);
				var evalEmbed = new Discord.RichEmbed()
					.setTitle("s!userinfo")
					.addField("User", data[0], true)
					.addField("User ID", data[1], true)
					.addField("User Creation Date", data[2], true)
					.addField("Status", data[3], true)
					.setThumbnail(data[4])

				message.channel.send(evalEmbed)
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!userinfo");
	})


	client.login(token.discord);
}
