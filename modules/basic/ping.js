const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const basic = require("./response.json");
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message =>{
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split(/ +/g);

		switch (command) {
			case 'ping':
				const m = await message.channel.send("Ping?");
				m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ping)}ms`);
				break;
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!ping");
	})


	client.login(token.discord);
}
