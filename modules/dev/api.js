const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").dev;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'api':
					if (message.author.id === package.ownerID){
						var request = args.slice(0).join(" ");
						switch (request) {
							case 'updateAll':
								message.channel.send("Force Updated All API Fields");
								require('./function.js').apiReqSend("userCount", client.users.size);
								require('./function.js').apiReqSend("guildCount", client.guilds.size);
								require('./function.js').apiReqSend("channelCount", client.channels.size);
								require('./function.js').apiReqSend("botVersion", package.version);
								require('./function.js').apiReqSend("botBuild", package.build[0]);
								require('./function.js').apiReqSend("botBuildDate", package.build[1]);
								require('./function.js').apiReqSend("botBranch", package.branch);
								require('./function.js').apiReqSend("botOwnerID", package.ownerID);
								require('./function.js').apiReqSend("packageName", package.name);
								require('./function.js').apiReqSend("botLicense", package.license);
								require('./function.js').apiReqSend("packageDescription", package.description);
								require('./../functions/console.js').apiSent();
								break;
							case 'update-userCount':
								require('./function.js').apiReqSend("userCount", client.users.size);
								break;
							case 'update-guildCount':
								require('./function.js').apiReqSend("guildCount", client.guilds.size);
								break;
							case 'update-channelCount':
								require('./function.js').apiReqSend("channelCount", client.channels.size);
								break;
							case 'update-botVersion':
								require('./function.js').apiReqSend("botVersion", package.version);
								break;
							case 'update-botBuild':
								require('./function.js').apiReqSend("botBuild", package.build[0]);
								break;
							case 'update-botBuildDate':
								require('./function.js').apiReqSend("botBuildDate", package.build[1]);
								break;
							case 'update-botBranch':
								require('./function.js').apiReqSend("botBranch", package.branch);
								break;
							case 'update-botOwnerID':
								require('./function.js').apiReqSend("botOwnerID", package.ownerID);
								break;
							case 'update-packageName':
								require('./function.js').apiReqSend("packageName", package.name);
								break;
							case 'update-botLicense':
								require('./function.js').apiReqSend("botLicense", package.license);
								break;
							case 'update-packageDescription':
								require('./function.js').apiReqSend("packageDescription", package.description);
								break;
							default:
								message.channel.send("Request not specifiyed, please check the help page.\n https://seedbot.xyz?commands#dev");
								break;
						}
					}
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("command");
	})


	client.login(token.discord);
}
