const figlet = require('figlet');
var reply;

module.exports.cmd = function() {
	let messagexd = args.slice(0).join(' ');
	figlet.text(messagexd, {
		font: 'Doom',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	}, function(err, data) {
		if (err) {
			console.log('Something went wrong...');
			console.dir(err);
			return;
		}
		if (messagexd.length > 0) {
			reply = "```" + data + "```"
		} else {
			let finalEmbedMessage = new Discord.RichEmbed
				.setColor('#0099ff')
				.addFeild('Syntax Error', 'No Text Specified');
			reply = finalEmbedMessage;
		}
	}
	
	return reply;
}