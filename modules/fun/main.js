
module.exports.init = function() {
	require('./../functions/console.js').modloaded("Fun")
		require('./asciify.js').cmd()
		require('./ppsize.js').cmd()
		require('./punch.js').cmd()
		require('./rockpaper.js').cmd()
		require('./magic8ball/main.js').cmd()
		require('./copypasta/main.js').cmd()
}