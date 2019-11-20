const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;
const package = require("./../../package.json");

module.exports.init = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
	});

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("API");
		require("./function.js").online();

		setInterval(function() {
			require('./function.js').apiReqSend(message, "userCount", client.users.size)
			require('./function.js').apiReqSend(message, "guildCount", client.guilds.size)
			require('./function.js').apiReqSend(message, "channelCount", client.channels.size)
			require('./function.js').apiReqSend(message, "botVersion", package.version)
			require('./function.js').apiReqSend(message, "botBuild", package.build[0])
			require('./function.js').apiReqSend(message, "botBuildDate", package.build[1])
			require('./function.js').apiReqSend(message, "botBranch", package.branch)
			require('./function.js').apiReqSend(message, "botOwnerID", package.ownerID)
			require('./function.js').apiReqSend(message, "packageName", package.name)
			require('./function.js').apiReqSend(message, "botLicense", package.license)
			require('./function.js').apiReqSend(message, "packageDescription", package.description)
			require('./../functions/console.js').apiSent();
		}, 60000);

	});


	client.login(token.discord);
}
