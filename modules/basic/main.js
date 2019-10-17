module.exports.init = function() {
	require('./../functions/console.js').modloaded("Basic")
	setTimeout(function() {
		require('./help.js').cmd()
		require('./invite.js').cmd()
		require('./ping.js').cmd()
		require('./patreon.js').cmd()
		require('./support.js').cmd()
		require('./roadmap.js').cmd()
		require('./guide.js').cmd()
		require('./avatar.js').cmd()
	},1000)
}