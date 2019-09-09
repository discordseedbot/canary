const youtuberror = require('./errors.json');

module.exports.cmd = function(rawargs,username) {
	var args = rawargs.substr(8, rawargs.length -1);
	var command = rawargs.substr(0,7);
	console.log(command)
	console.log(args)
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
				return require('./videoinfo.js').init(args);
			}
		}
		else {
			return youtuberror.invalidcommandreply;
		}
	}
}