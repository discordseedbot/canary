modules.export.cmd = function(avatar, mentionusername, username) {
      if (usermentiofirst.length > 0) {
      	return `Avatar for, **${mentionusername}:**\n${avatar}`;
      } else {
      	return `Avatar for, **${username}:**\n${avatar}`;
      }
}