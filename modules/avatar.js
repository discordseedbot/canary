module.exports.init = function(mentionusername, mentionavatar, username, usernameavatar) {
      if (mentionusername.length > 0) {
      	return "Avatar for, **" + mentionusername + "**\n" + mentionavatar;
      } else {
      	return "Avatar for, **" + username + ":**\n" + usernameavatar;
      }
}