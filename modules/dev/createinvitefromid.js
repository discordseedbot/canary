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
			case 'createinvitefromid':
    if (message.author.id === package.ownerID){
        let guildid = args.slice(0).join(' ');
        let guild = client.guilds.get(guildid);
        if (!guild) return message.reply("The bot isn't in the guild with this ID.");

        guild.fetchInvites()
            .then(invites => message.channel.send('Found Invites:\nhttps://discord.gg/' + invites.map(invite => invite.code).join('\n')))
            .catch(console.error);
    }
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~createinvitefromid");
	})


	client.login(token.discord);
}
