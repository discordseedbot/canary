const Discord = require("discord.js"); 
const { RichEmbed } = require("discord.js"); 
const client = new Discord.Client();
const token = require("./../../token.json");
const package = require('./../../package.json');
const prefix = require("./../../prefix.json").dev;

module.exports.init = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'api':
				if (token.api !== "seedbot-api-token") {
					require('./api.js').cmd(message, client, args);
				} else {
					message.reply("API Token has not been changed, not executing.");
				}
				break;
			case 'channelsend':
				require('./channelsend.js').cmd(message, client, args);
				break;
			case 'createinvitefromid':
				require('./createinvitefromid.js').cmd(message, client, args);
				break;
			case 'getallserverinvite':
				require('./getallserverinvite.js').cmd(message, client, args);
				break;
			case 'eval':
				require('./eval.js').cmd(message, args);
				break;
			case 'getip':
				require('./getip.js').cmd(message, args);
				break;
			case 'rpc':
				require('./rpc.js').cmd(message, client, args);
				break;
			case 'shell':
				require('./shell.js').cmd(message, args);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("Developer Commands");
	})


	client.login(token.discord);
}
