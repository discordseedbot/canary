const signale = require("signale");
const { Signalee } = require("signale");
const options = {
	types: {
		cmdLoad: {
			badge: '#',
			color: 'blueBright'
		},
		botError: {
			badge: '!!',
			color: 'red'
		},
		modLoaded: {
			badge: '$',
			color: 'blueBright'
		}
}

module.exports.init = function() {
	signale.fatal("Inpropper use of console module, please look over your code <3");
	process.exit();
}
module.exports.cmdloaded = function (loadedCommand) {
	customsignale.cmdLoad("Loaded " + loadedCommand);
}
module.exports.modloaded = function (modName) {
	customsignale.modLoad("Loaded " + modName + " module");
}
module.exports.info = function (content) {
	signale.info(content);
}
