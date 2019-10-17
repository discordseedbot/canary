const signaledef = require("signale");
const { Signale } = require("signale");

const options = {
	types: {
		cmdLoad: {
			badge:' ##',
			color: 'blueBright',
			label: 'Command Loaded'
		},
		botError: {
			badge: '!!',
			color: 'red',
			label: 'Error'
		},
		modLoaded: {
			badge: '$$',
			color: 'blueBright',
			label: 'Module Loaded'
		}
	}
};
//const signal = new Signale(options);

module.exports.init = function() {
	signaledef.fatal("Inpropper use of console module, please look over your code <3"); process.exit();
}
module.exports.cmdloaded = function (loadedCommand) {const signal = new Signale(options);
	signal.cmdLoad("Loaded " + loadedCommand);
}
module.exports.modloaded = function (modName) {const signal = new Signale(options);
	signal.modLoad("Loaded " + modName + " module");
}
module.exports.info = function (content) {
	signaledef.info(content);
}
module.exports.fatal = function (content) {
	signaledef.fatal(content);
}
