const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").dmoj;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

			const problems = require('./problem.js');
			const contests = require('./contest.js');
			const users = require('./user.js');

		if(command==='problem'){
			if(args.length===2&&args[1]==='-l'){
				problems.get(args[0],!0,message)
			}else{
				problems.get(args[0],!1,message)
			}
		};
		if(command==='contest'){
			if(args.length===2&&args[1]==='-l'){
				contests.get(args[0],!0,message)
			}else{
				contests.get(args[0],!1,message)
			}
		};
		if(command==='user'){
			if(args.length===2&&args[1]==='-l'){
				users.get(args[0],!0,message)
			}else{
				users.get(args[0],!1,message)
			}
		};
		if(command==='search'){
			message.reply('Working on it...').then(message=>{message.delete(5000)});
			if(args.length===2&&args[1]==='-l'){
				problems.search(args[0],!0,message)
			}else{
				problems.search(args[0],!1,message)
			}
		};if(command==='contest-search'){
			message.reply('Working on it...').then(message=>{message.delete(5000)});
			if(args.length===2&&args[1]==='-l'){
				contests.search(args[0],!0,message)
			}else{
				contests.search(args[0],!1,message)
			}
		};if(command==='user-search'){
			message.reply('Working on it...').then(message=>{message.delete(5000)});
			if(args.length===2&&args[1]==='-l'){users.search(args[0],!0,message)
			}else{
				users.search(args[0],!1,message)
			}
		};
	})

	client.on('ready', () => {
		require("./../functions/console.js").modloaded("DMOJ");
	})


	client.login(token.discord);
}