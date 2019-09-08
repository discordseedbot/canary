module.exports.cmd = require(command, videolink) {
	if (command.length < 1) {
		return nocommandreply;
	} else{
		if (command === "randomcomment") {
			if (videolink.length < 1) {
				return novideolinkreply;
			} else {
				require('./randomcomment.js').init(videolink);
			}
		} else {
			return invalidcommandreply;
		}
	}
}