const package = require("./../../package.json");

module.exports.cmd = function(message, client, args) {
	if (message.author.id === package.ownerID){
		var request = args.slice(0).join(" ");
		switch (request) {
			case 'updateAll':
				message.channel.send("Force Updated All API Fields");
				require('./../api/function.js').apiReqSend("userCount", client.users.size);
				require('./../api/function.js').apiReqSend("guildCount", client.guilds.size);
				require('./../api/function.js').apiReqSend("channelCount", client.channels.size);
				require('./../api/function.js').apiReqSend("botVersion", package.version);
				require('./../api/function.js').apiReqSend("botBuild", package.build[0]);
				require('./../api/function.js').apiReqSend("botBuildDate", package.build[1]);
				require('./../api/function.js').apiReqSend("botBranch", package.branch);
				require('./../api/function.js').apiReqSend("botOwnerID", package.ownerID);
				require('./../api/function.js').apiReqSend("packageName", package.name);
				require('./../api/function.js').apiReqSend("botLicense", package.license);
				require('./../api/function.js').apiReqSend("packageDescription", package.description);
				require('./../functions/console.js').apiSent();
				break;
			case 'update-userCount':
				require('./../api/function.js').apiReqSend("userCount", client.users.size);
				break;
			case 'update-guildCount':
				require('./../api/function.js').apiReqSend("guildCount", client.guilds.size);
				break;
			case 'update-channelCount':
				require('./../api/function.js').apiReqSend("channelCount", client.channels.size);
				break;
			case 'update-botVersion':
				require('./../api/function.js').apiReqSend("botVersion", package.version);
				break;
			case 'update-botBuild':
				require('./../api/function.js').apiReqSend("botBuild", package.build[0]);
				break;
			case 'update-botBuildDate':
				require('./../api/function.js').apiReqSend("botBuildDate", package.build[1]);
				break;
			case 'update-botBranch':
				require('./../api/function.js').apiReqSend("botBranch", package.branch);
				break;
			case 'update-botOwnerID':
				require('./../api/function.js').apiReqSend("botOwnerID", package.ownerID);
				break;
			case 'update-packageName':
				require('./../api/function.js').apiReqSend("packageName", package.name);
				break;
			case 'update-botLicense':
				require('./../api/function.js').apiReqSend("botLicense", package.license);
				break;
			case 'update-packageDescription':
				require('./../api/function.js').apiReqSend("packageDescription", package.description);
				break;
			default:
				message.channel.send("Request not specifiyed, please check the help page.\n https://seedbot.xyz?commands#dev");
				break;
		}
	}
}
