const figlet = require('figlet');
var reply;

module.exports.cmd = function(inputText) {
	figlet.text(inputText, {
	    font: 'big',
	    horizontalLayout: 'default',
	    verticalLayout: 'default'
	}, function(err, data) {
	    if (err) {
	        console.log('Something went wrong...');
	        console.dir(err);
	        return;
	    }
	    return data;
		if (inputText.length > 0) {
			reply = "```" + data + "```"
		} else {
			let finalEmbedMessage = new Discord.RichEmbed
				.setColor('#0099ff')
				.addFeild('Syntax Error', 'No Text Specified');
			reply = finalEmbedMessage;
		}
	});
	
	return reply;
}