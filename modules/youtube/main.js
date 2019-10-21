module.exports.init = function() {
	require('./../functions/console.js').modloaded("Youtube")
		require('./videoinfo.js').cmd()
		require('./../disabled.js').init("s!yt", "randomcomment")
		require('./../disabled.js').init("s!yt", "channelinfo")
		//require('./../disabled.js').init("s!yt", "videoinfo")
		//require('./randomcomment.js').cmd()
}