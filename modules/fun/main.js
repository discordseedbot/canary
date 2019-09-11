module.exports.init = function() {
	console.log("You have not supplied a correct fun command, please fix your code <3");
	return "The bot owner has not configured this command properly, please fix your code <3";
}


module.exports.copypasta = function() {
	return require('./copypasta.js').init();
}
module.exports.rps = function(choice) {
	return require('./rockpaper.js').init(choice);
}
module.exports.punch = function(user) {
	return require('./punch.js').init(user);
}
module.exports.ppsize = function() {
	return require('./ppsize.js').init();
}
module.exports.magic8ball = function() {
	return require('./magic8ball.js').init();
}