const { Signale } = require('signale');
const replaceString = require('replace-string');
const prefix = require('./prefix.json');
const config = require('./config.json');
const package = require('./package.json');
const strmanreplace = require('strman.replace');
const signaleoptions = {
	disabled:!1,
	interactive:!1,
	stream:process.stdout,
	types:
	{
		command:
		{
			color:'green',
			label:'COMMAND'
		},
		debug:
		{
			color:'blue',
			label:'DEBUG',
		},
		error:
		{
			color:'red',
			label:'ERROR',
		},
		info:
		{
			color:'gray',
			label:'INFO',
		}
	}
};
const log = new Signale(signaleoptions);
console.clear

log.info('package.branch: ' + package.branch);
log.info('package.name: ' + package.name);
log.info('package.version: ' + package.version);
log.info('package.build: ' + package.build);
log.info('package.description: ' + package.description);
log.info('package.ownerID: ' + package.ownerID);
const engines = package.engines;
console.log('----------');
log.debug('engines: ');
console.log(engines);
console.log('----------');
log.debug('dependencies:');
console.log(package.dependencies);
console.log('----------');
log.info('package.author: ' + package.author);
console.log('');
console.log('');
log.debug('prefix.default: ' + prefix.default);
log.debug('prefix.dev: ' + prefix.dev);
log.debug('prefix.music: ' + prefix.dev);
log.debug('prefix.math: ' + prefix.math);
log.debug('prefix.wiki: ' + prefix.wiki);
console.log('');
log.debug('config.token: ' + config.token);
log.debug('config.ytapi: ' + config.ytapi);