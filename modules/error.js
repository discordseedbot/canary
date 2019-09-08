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
module.exports.developing = function() {
  return {embed: {
    color: 990000,
    fields:[{
      name: ":thinking:",
      value: "This command is coming soon, hold tight!"
    }],
    timestamp: 'Requested at: ' + new Date()
  }};
}
module.exports.init = function() {
  return "The Owner of this bot has not configurated the bot properly.\n There will be a guide in the future. Sorry!";
}