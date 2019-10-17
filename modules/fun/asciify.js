const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'asciify':
				var reply;
				figlet.text(inputText, {
				    font: 'big',
				    horizontalLayout: 'default',
				    verticalLayout: 'default'
				}, function(err, data) {
				    if (err) {
				        message.channel.send('Something went wrong...');
				        console.dir(err);
				        return;
				    }
				    return data;
					if (inputText.length > 0) {
						message.channel.send("```" + data + "```");
					} else {
						let finalEmbedMessage = new Discord.RichEmbed
							.setColor('#0099ff')
							.addFeild('Syntax Error', 'No Text Specified');
						message.channel.send(finalEmbedMessage);
					}
				});
				break;
		}
	});

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!asciify");
	})


	client.login(token.discord);
}
