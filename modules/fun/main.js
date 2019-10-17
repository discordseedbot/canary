
module.exports.init = function() {
	require('./../functions/console.js').modloaded("Fun")
	setTimeout(function() {
		require('./asciify.js').cmd()
		require('./ppsize.js').cmd()
		require('./punch.js').cmd()
		require('./rockpaper.js').cmd()
		require('./magic8ball/main.js').()
		require('./copypasta/main.js').()
	},1000)
}