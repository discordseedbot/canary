const curl = new (require( 'curl-request' ))();
const token = require('./../../token.json');
const package = require('./../../package.json');

function sleep(ms){return new Promise(resolve=>{setTimeout(resolve,ms)})}

var curlUserAgent = 'user-agent: SeedBot/' + package.version + ' / token: ' + token.api + '';
var curlRequest = "http://api.seedbot.xyz?req=";


module.exports.checkConnection = function() {
	var uhhh;
	var result = curl.setHeaders([curlHeader]).get(curlRequest + "test").then(({statusCode, body, headers}) => {
		if (body === 'true') {
				require('./../functions/console.js').info("Connection Established to API Server.");
		} else {
				require('./../functions/console.js').fatal("Connection failed to API Server, some commands may not work. Disable the API in modules/config.json");
		}
	});
}

module.exports.apiReqSend = async function(type, data) {
	var result;
	curl.setHeaders([curlHeader])
		.get("http://api.seedbot.xyz?token=" + token.api +"&req=" + type +"&data=" + data).then(({statusCode, body, headers}) => {});
}