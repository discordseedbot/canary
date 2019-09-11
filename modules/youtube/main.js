const youtuberror = require('./errors.json');

module.exports.init = function(rawargs,username) {
	var args = rawargs.substr(8, rawargs.length -1);
	var command = rawargs.substr(0,7);
	if (command.length < 1) {
		return youtuberror.nocommandreply;
	} else{
		if (command === "randcmt") {
			//if (args.length < 1) {
			//	return youtuberror.novideolinkreply;
			//} else {
			//	return require('./randomcomment.js').init(args);
			//}
			return require('./../error.js').disabled("s!youtube randcmt",username);
		} 
		if (command === "vidinfo") {
			if (args.length < 1) {
				return youtuberror.novideolinkreply;
			} else {
				return require('./videoinfo.js').cmd(args);
			}
		}
		else {
			return youtuberror.invalidcommandreply;
		}
	}
}