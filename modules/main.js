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
			},130000)
		});
	client.login(token.discord);


		//Starts init function in the master file of the module.
	require("./dmoj/main.js").init();
	require("./basic/main.js").init();
	require("./mod/main.js").init();
	require("./fun/main.js").init();
	require("./dev/main.js").init();

	//Checks if the API token has been changed,
	//then the API token does not get loaded.
	if (token.api === "seedbot-api-token") {
		require("./functions/console.js").warn("API Token has not been set, API Updated disabled.");
	} else {
		require("./api/main.js").init();
	}

	//Checks if the Youtube API token has been changed
	//if it has not then the Yuotube and Music module
	//does not get loaded.
	if (token.youtue === "youtube-api-token"){
		require("./functions/console.js").warn("Youtube API Token has not been set\ndisabled Music Module and Youtube Module.");
	} else {
		require("./youtube/main.js").init();
		require("./music/main.js").cmd();
	}

	console.log("Loading Commands (this might take a while)")
}
