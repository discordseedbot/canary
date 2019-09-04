const package = require('./package.json');


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
modules.export.patreon = function() {
  return {embed: {
      color: 329514,
      author: {name: 's!patreon'},
      fields: [{
        name: 'Patreon',
        value: "It's not free to run a discord bot and since more people are starting to use SeedBot I made a patreon page \n so people can give me money to run my discord bot so it can handle more people at once (which is what it is struggling at), also so when we get more money I can hire someone to make modules for the bot and in the future make a dashboard so you have a better experience.\n\n If you want all of these good things that other bots have then Donate to our patreon page at:\n https://patreon.com/jyles_coadward",
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }};
}