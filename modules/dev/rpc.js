const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").dev;
const package = require('./../../package.json');

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'rpc':
				var game = args.slice(0).join(" ");
				if (message.author.id === package.ownerID) {

							//reset devcomman
					if (game === 'refresh') {
						client.user.setActivity(`you - seedbot.xyz`, { type: 'WATCHING'});
						message.channel.send("***Rich Presence has been Refreshed***")
					} else {
						client.user.setActivity(`${game} - seedbot.xyz`, { type: 'WATCHING'});
						message.channel.send('***Rich Presence has been updated to:*** \n' + "`" + game + "`");
					}
				}else{
					message.reply('You do not have permissions to use this developer command.');
				}
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~rpc");
	})


	client.login(token.discord);
}
