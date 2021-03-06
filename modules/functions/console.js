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
		modLoad: {
			badge: '$$',
			color: 'blueBright',
			label: 'Module Loaded'
		},
		apiSent: {
			badge: '//',
			color: 'yellow',
			label: 'API Sent'
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
module.exports.apiSent = function (modName) {const signal = new Signale(options);
	let now = new Date();
	let date = now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear();
	let time = now.getHours()+":"+now.getMinutes()+";"+now.getSeconds();
	signal.apiSent("API Request Sent at: " + time + " " + date);
}
module.exports.info = function (content) {
	signaledef.info(content);
}
module.exports.fatal = function (content) {
	signaledef.fatal(content);
}
module.exports.debug = function (content) {
	signaledef.debug(content);
}
module.exports.warn = function (content) {
	signaledef.warn(content);
}
