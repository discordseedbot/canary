module.exports.init = function(){
	require('./../functions/console.js').modloaded("Developer")
	setTimeout(function() {
		require('./ban.js').cmd()
		require('./kick.js').cmd()
	},1000)
}