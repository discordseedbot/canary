const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;
const package = require("./../../package.json");

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
					case 'guildCount':
						var response = client.guilds.size;
						var gulidCountResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Guild Count")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(gulidCountResponse);
						break;
					case 'channelCount':
						var response = client.channels.size;
						var channelCountResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Channel Count")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(channelCountResponse);
						break;
					case 'botVersion':
						var response = package.version;
						var botVerResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Version")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(botVerResponse);
						break;
					case 'botBuild':
						var response = package.build[0];
						var botBuildResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Bot Build")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(botBuildResponse);
						break;
					case 'botBuildDate':
						var response = package.build[1];
						var buildDateResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Build Date")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(buildDateResponse);
						break;
					case 'botBranch':
						var response = package.branch;
						var branchResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Branch")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(branchResponse);
						break;
					case 'botOwnerID':
						var response = package.ownerID;
						var botOwnerIDResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Owner ID")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(botOwnerIDResponse);
						break;
					case 'packageName':
						var response = package.name;
						var pkgNameResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Package Name")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(pkgNameResponse);
						break;
					case 'botLicense':
						var response = package.license;
						var licenseResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot License")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(licenseResponse);
						break;
					case 'packageDescription':
						var response = package.description;
						var pkgDescResponse = new Discord.RichEmbed()
							.setColor(require("./../functions/main.js").randomhexcolor())
							.setTitle("SeedBot Package Description")
							.setDescription("Request:\n ```\n"+request+"```\n\nResponse: \n```"+response+"\n```")
						message.channel.send(pkgDescResponse);
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
