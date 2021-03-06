

const tokenJSON = require('./token.json');
const package = require('./package.json');



console.log("# Bot OwnerID Set to: " + package.ownerID);

//Checks if the varaible "discord" in token.json has
//been changed, if it has not then the process is killed.
switch (tokenJSON.discord) {
	case 'discord-token':
		console.log("!! Bot token has not been changed, halted process.");
		process.exit()
	default:
		console.log("# Starting SeedBot in 5 seconds.");
		require("./modules/api/function.js").online();

		//Launches command hander in the next 5000ms (5 seconds)
		setTimeout( function() {
			require('./modules/main.js').init();
		}, 5000);
};
//process.stdin.resume();
//process.on('SIGINT', require("./modules/api/function.js").offline());
//process.on('break', require("./modules/api/function.js").offline());
//process.on('exit', require("./modules/api/function.js").offline());