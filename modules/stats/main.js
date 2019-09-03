const fs = require('fs');
const package = require('./../../package.json');

module.exports.sync = function (usercount, channelcount, guildcount) {
  //Users
  if (fs.existsSync('./modules/stats/users.txt')){
    fs.unlinkSync('./modules/stats/users.txt');
    fs.writeFileSync('./modules/stats/users.txt', usercount.toString());
  } else {
    fs.writeFileSync('./modules/stats/users.txt', usercount.toString());
  }

  //Channels
  if (fs.existsSync('./modules/stats/channels.txt')){
    fs.unlinkSync('./modules/stats/channels.txt');
    fs.writeFileSync('./modules/stats/channels.txt', channelcount.toString());
  } else {
    fs.writeFileSync('./modules/stats/channels.txt', channelcount.toString());
  }

  //Guilds/Servers
  if (fs.existsSync('./modules/stats/guilds.txt')){
    fs.unlinkSync('./modules/stats/guilds.txt');
    fs.writeFileSync('./modules/stats/guilds.txt', guildcount.toString());
  } else {
    fs.writeFileSync('./modules/stats/guilds.txt', guildcount.toString());
  }

  //Version
  if (fs.existsSync('./modules/stats/version.txt')){
    fs.unlinkSync('./modules/stats/version.txt');
    fs.writeFileSync('./modules/stats/version.txt', package.version.toString());
  } else {
    fs.writeFileSync('./modules/stats/version.txt', package.version.toString());
  }
}