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
			case 'command':
				if (message.author.id === package.ownerID){
					var invites = ["I am required else it won't work"], ct = 0;
					client.guilds.forEach(g => {
						g.fetchInvites().then(guildInvites => {
							invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
							ct++;

							if(ct >= client.guilds.size) {
								for(let i = 0; i < invites.length; i++) {
									if(invites[i] == undefined) invites.splice(i, 1);
								}
								invites.shift();

								for(let i = 0; i < invites.length; i++) invites[i] = "- " + invites[i];
								invites = invites.join("\n\n");

								let embed = new Discord.RichEmbed()
									.setTitle("All Invites:")
									.setDescription(invites);
								message.channel.send(embed);
							}
						}).catch(err => { ct++; });
					}); 
				} else {
					message.reply("this command can only be used by a developer.");
				}
				break;
		}
	})

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s~getallserverinvite");
	})


	client.login(token.discord);
}
