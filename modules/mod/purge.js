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

		switch (command) {
			case 'purge':
				const user = message.mentions.users.first();
				// Parse Amount
				const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
				if (!amount) return message.reply('Must specify an amount to delete!');
				if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
				// Fetch 100 messages (will be filtered and lowered up to max amount requested)
				message.channel.fetchMessages({
				 limit: 1000,
				}).then((messages) => {
				 if (user) {
				 const filterBy = user ? user.id : Client.user.id;
				 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
				 }
				 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
				});

				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!purge");
	})


	client.login(token.discord);
}
