
module.exports.init = function() {
	require('./../functions/console.js').modloaded("Developer")
		require('./getip.js').cmd()
		//require('./announce.js').cmd()
		require('./../disabled.js').cmd("s~", "announce");
		require('./channelsend.js').cmd()
		require('./eval.js').cmd()
		require('./rpc.js').cmd()
		require('./shell.js').cmd()
		require('./createinvitefromid.js').cmd()
		require('./getallserverinvite.js').cmd()
}