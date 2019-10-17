module.exports.init = function(){
	require('./../functions/console.js').modloaded("Developer")
		require('./ban.js').cmd()
		require('./kick.js').cmd()
}