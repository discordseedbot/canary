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
			case 'eval':
				if (message.author.id === package.ownerID) {
					const code = args.join(" ");
					let evaled = eval(code);

					if (typeof evaled !== "string"){break;}
					evaled = require("util").inspect(evaled);
				}
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~eval");
	})


	client.login(token.discord);
}
