const Discord = require('discord.js');
const package = require('./../package.json');
const token = require('./../token.json');

module.exports.init = function () {
	require("./functions/console.js").info("Bot Starting");
	require('./functions/console.js').info("Copyright 2018-2019, jyles.club and DARiOX.club");
	require('./functions/console.js').info('Running SeedBot ' + package.branch + " (" + package.version + ", build" + package.build +")");

	const client = new Discord.Client();
		client.on('ready', () => {
			client.user.setActivity(`myself boot up.`, { type: 'WATCHING'});
    		client.user.setStatus('dnd', "Starting SeedBot");
			setTimeout(function() {
				require("./functions/console.js").debug("Bot has started at " + new Date());
				require("./functions/console.js").debug(`Bot has started, with ` + client.users.size + ` users, in ` + client.channels.size + ` channels of ` + client.guilds.size + ` guilds.`);
				client.user.setActivity(`Sound of Sorting - s!help`, { type: 'LISTENING'});
    			client.user.setStatus('online', "SeedBot Online");
			},150000)
		});
	client.login(token.discord);


		//Starts init function in the master file of the module.
	require("./dmoj/main.js").init();
	require("./basic/main.js").init();
	require("./music/main.js").cmd();
	require("./mod/main.js").init();
	require("./fun/main.js").init();
	require("./dev/main.js").init();
	//require("./api/main.js").init();
	require("./youtube/main.js").init();

	console.log("Loading Commands (this might take a while)")
}
