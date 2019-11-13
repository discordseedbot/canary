const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message, client, args) {
	var user;
	var userArgs = args.slice(0).join(" ");
	if (userArgs.length > 1){
		user = message.mentions.users.first(); console.log("hi");
	} else { user = message.author; console.log("no")}
	const data = [];
	data.push("<@"+user.id+">");
	data.push(user.id);
	data.push(user.createdAt);
	data.push(user.presence.status);
	data.push(user.avatarURL);
	var evalEmbed = new Discord.RichEmbed()
		.setTitle("s!userinfo")
		.addField("User", data[0], true)
		.addField("User ID", data[1], true)
		.addField("User Creation Date", data[2], true)
		.addField("Status", data[3], true)
		.setThumbnail(data[4])

	message.channel.send(evalEmbed)
}
