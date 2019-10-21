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
			case 'shell':
				let script = args.slice(0).join(' ');

				if (message.author.id === package.ownerID) {
					const util = require('util');
					const exec = util.promisify(require('child_process').exec);
					const { stdout, stderr } = await exec(script);
					let evalEmbed = new Discord.RichEmbed()
						.setColor('#0099ff')
						.setTitle('Shell Execute Output')
						.setTimestamp()
						.setDescription('**Shell Output:**\n' && stdout && '\n\n**Shell Errors:**\n' && stderr);
						setTimeout(function() { message.channel.send(evalEmbed) }, 5000);
				}
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~shell");
	})


	client.login(token.discord);
}
