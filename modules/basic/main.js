const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.init = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'help':
				require('./help.js').cmd(message);
				break;
			case 'invite':
				require('./invite.js').cmd(message);
				break;
			case 'ping':
				require('./ping.js').cmd(message);
				break;
			case 'patreon':
				require('./patreon.js').cmd(message);
				break;
			case 'support':
				require('./support.js').cmd(message);
				break;
			case 'roadmap':
				require('./roadmap.js').cmd(message);
				break;
			case 'guide':
				require('./guide.js').cmd(message);
				break;
			case 'avatar':
				require('./avatar.js').cmd(message);
				break;
			case 'info':
				require('./info.js').cmd(message);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("Basic Commands");
	})


	client.login(token.discord);
}
