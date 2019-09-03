module.exports.int = function(channel) {
	channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
}