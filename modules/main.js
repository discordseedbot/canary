const Discord = require('discord.js');

const token = require('./../token.json');

module.exports.init = function () {
	require("./functions/command.js").info("Bot Starting");
	require('./functions/command.js').info("Copyright 2018-2019, jyles.club and DARiOX.club");
	require('./functions/command.js').info('Running SeedBot ' + package.branch + " (" + package.ver + ", build" + package.build +")");

		//Starts init function in the master file of the module.
	require("./functions/basic/main.js").init();			console.log();
	require("./functions/music/main.js").cmd();				console.log();
	require("./functions/mod/main.js").init();				console.log();
	require("./functions/fun/main.js").init();				console.log();
	require("./functions/dmoj/main.js").init();				console.log();
	require("./functions/dev/main.js").init();				console.log();

	client.on('ready', () => {
		require("./functions/command.js").debug("Bot has started at " + new Date());
		require("./functions/command.js").debug(`Bot has started, with ` + client.users.size + ` users, in ` + client.channels.size + ` channels of ` + client.guilds.size + ` guilds.`);
	});

	client.login(token.discord);
}
