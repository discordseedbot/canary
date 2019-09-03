module.exports.disabled = function(commandName,username) {
	let disablereason = 'The `' + commandName + '` Command has been disabled since it has not been working for a while,\nThere will be an update in the future to fix this bug.\n\nSorry for the inconvenience!'
	return {embed: {
      color: 990000,
      fields: [{
        name: 'Command Disabled',
        value: disablereason
      }],
      timestamp: 'Requested at: ' + new Date(),
      footer: {
        text: 'Requested by: ' + username,
      }
    }};
}