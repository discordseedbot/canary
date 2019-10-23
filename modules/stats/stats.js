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
			case 'stats':
				var request = args.slice(0).join(" ");
				switch (request) {
					case 'userCount':
						var response = client.users.size;
						var userCountResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot User Count")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(userCountResponse);
						break;
					default:
						var defaultResponse = new Discord.Richembed()
							.setColor("#ff0000")
							.setTitle("Invalid Request")
							.setDescription("You have either put no request, or an invalid request. For more information (click here)[https://seedbot.xyz?commands#s!stats].")
						message.channel.send(defaultResponse);
						break;
				}

				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!stats");
	})


	client.login(token.discord);
}
