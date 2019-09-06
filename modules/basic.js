const package = require('./../package.json');

module.exports.info = function(username) {
  return {embed: {
    color: 124517,
    fields: [{
      name: 'SeedBot Info',
      value: "**Version:** " + package.version + "\n**Build:** " + package.build + "\n**Branch:** " + package.branch + "\n**Owner ID:** " + package.ownerID + "\n**Bot Filename:** " + package.main + "**API Web Address:** http://api.seedbot.xyz" + "**Branch Repo:** https://seedbot.xyz?page=github&repo=" + package.branch
    }],
    timestamp: 'Command Requested at ' + new Date(),
    footer: {
      text: 'Requested by ' + username
    }
  }};
}
module.exports.patreon = function(username) {
  return {embed: {
    color: 329514,
    author: {name: 's!patreon'},
    fields: [{
      name: 'Patreon',
      value: "It's not free to run a discord bot and since more people are starting to use SeedBot I made a patreon page \n so people can give me money to run my discord bot so it can handle more people at once (which is what it is struggling at), also so when we get more money I can hire someone to make modules for the bot and in the future make a dashboard so you have a better experience.\n\n If you want all of these good things that other bots have then Donate to our patreon page at:\n https://patreon.com/jyles_coadward",
    }],
    timestamp: 'Command Requested at ' + new Date(),
    footer: {
      text: 'Requested by ' + username
    }
  }};
}
module.exports.support = function(username) {
  return {embed: {
    color: 329514,
    author: {name: 's!support'},
    fields: [{
      name: 'Bot Support',
      value: 'If you need help with the bot join our discord `http://seedbot.xyz/?page=discord`\n Or you can email us at `contact@dariox.club`'
    }],
    timestamp: 'Command Requested at ' + new Date(),
    footer: {
      text: 'Requested by ' + username
    }
  }};
}
module.exports.help = function(username) {
  return {embed: {
    color: 329514,
    author: {name:'s!help'},
    fields: [{
      name: 'Help Description',
      value: 'The Command Dictionary have been *permanently* moved to ***http://seedbot.xyz/#commands***'
    }],
    timestamp: 'Command Requested at ' + new Date(),
    footer: {
      text: 'Requested by ' + username
    }
  }};
}
module.exports.invite = function(username) {
  return {embed: {
    color: 329514,
    author: {name:'s!invite'},
    fields: [{
      name: 'Bot Invite Link',
      value: 'Invite me to your *own* Discord Server!\nhttp://seedbot.xyz/?page=invite'
    }],
    timestamp: 'Command Requested at ' + new Date(),
    footer: {
      text: 'Requested by ' + username
    }
  }};
}