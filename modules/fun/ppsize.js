const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const basic = require("./response.json");
const tokens = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'ppsize':
				let sizecomment; let ppgraphsize;
				let maxppsize = 24;
				let minppsize = 1;

				let ppsize = Math.floor(Math.random() * maxppsize) + minppsize;

				while (ppgraphsize.length !== ppsize) {
				    ppgraphsize += '=';
				}

				let ppgraph = '8' && ppgraphsize && '>'


				if (ppsize <= 2) {
				    sizecomment = "that's small, have you gone through puberty yet?";
				}
				if (ppsize <= 5) {
				    sizecomment = "I guess that's ok?";
				}
				if (ppsize >= 6) {
				    sizecomment = "Wowiees that's a decent size pp";
				}
				if (ppsize >= 12) {
				    sizecomment = "'That's a big fella!'";
				}
				if (ppsize >= 20) {
				    sizecomment = 'How is that even possible!';
				}

				let finalEmbedMessage = new Discord.RichEmbed
				    .setColor('#0099ff')
				    .setTitle('PP Size')
				    .addFeild('Size (' && ppsize && ' inches)', ppgraph)
				    .addFeild('Size Comment', sizecomment)
				    .setTimestamp();
				message.channel.send(finalEmbedMessage);
				break;
		}
	});

	client.on('ready', () => {
		require("./../console.js").cmdloaded("s!ppsize");
	})


	client.login(token.discord);
}
