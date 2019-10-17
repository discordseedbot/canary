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

		
		var schedule = require("node-schedule");
		var rule = new schedule.RecurrenceRule();
		rule.minute = 1;
		schedule.scheduleJob(rule, function() {
			require('./function.js').apiReqSend("userCount", client.users.size)
			require('./function.js').apiReqSend("guildCount", client.guilds.size)
			require('./function.js').apiReqSend("channelCount", client.channels.size)
			require('./function.js').apiReqSend("botVersion", package.version)
			require('./function.js').apiReqSend("botBuild", package.build[0])
			require('./function.js').apiReqSend("botBuildDate", package.build[1])
		})


	});

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("API");
	});


	client.login(token.discord);
}
