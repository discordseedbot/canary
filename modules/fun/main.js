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
			case 'asciify':
				require('./asciify.js').cmd(message, args);
				break;
			case 'punch':
				require('./punch.js').cmd(message, args);
				break;
			case 'rps':
				require('./rockpaper.js').cmd(message, args);
				break;
			case 'magic8ball':
				require('./magic8ball/main.js').cmd(message);
				break;
			case 'copypasta':
				require('./copypasta/main.js').cmd(message);
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("Fun Commands");
	})

	client.login(token.discord);
}
