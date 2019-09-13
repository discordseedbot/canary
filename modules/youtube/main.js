const youtuberror = require('./errors.json');

module.exports.init = function(rawargs,username) {
	var args = rawargs.substr(8, rawargs.length -1);
	var command = rawargs.substr(0,7); var resultxd;
	if (command.length < 1) {
		resultxd = youtuberror.nocommandreply;
	} else{
		if (command === "randcmt") {
			//if (args.length < 1) {
			//	resultxd = youtuberror.novideolinkreply;
			//} else {
			//	resultxd = require('./randomcomment.js').init(args);
			//}
			resultxd = require('./../error.js').disabled("s!youtube randcmt",username);
		} 
		if (command === "vidinfo") {
			if (args.length < 1) {
				resultxd = youtuberror.novideolinkreply;
			} else {
				resultxd = require('./videoinfo.js').cmd(args);
			}
		}
		else {
			resultxd = youtuberror.invalidcommandreply;
		}
	}
	return resultxd;
}