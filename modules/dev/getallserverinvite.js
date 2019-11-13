const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

module.exports.cmd = function(message, client, args) {
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
		message.reply("This command can only be used by a developer.");
	}
}
