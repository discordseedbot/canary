
modules.export.info = function() {
  return {embed: {
      color: 124517,
      fields: [{
        name: 'SeedBot Info',
        value: "**Version:** " + package.version + "\n**Build:** " + package.build + "\n**Branch:** " + package.branch + "\n**Owner ID:** " + package.ownerID + "\n**Bot Filename:** " + package.main
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }};
}