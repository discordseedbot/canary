const fs = require('fs');
const package = require('./../../package.json');

module.exports.sync = function (usercount, channelcount, guildcount) {
  //Users
  if (fs.existsSync('./users.txt')){
    fs.unlinkSync('./users.txt');
    fs.writeFileSync('./users.txt', usercount.toString());
  } else {
    fs.writeFileSync('./users.txt', usercount.toString());
  }

  //Channels
  if (fs.existsSync('./channels.txt')){
    fs.unlinkSync('./channels.txt');
    fs.writeFileSync('./channels.txt', channelcount.toString());
  } else {
    fs.writeFileSync('./channels.txt', channelcount.toString());
  }

  //Guilds/Servers
  if (fs.existsSync('./guilds.txt')){
    fs.unlinkSync('./guilds.txt');
    fs.writeFileSync('./guilds.txt', guildcount.toString());
  } else {
    fs.writeFileSync('./guilds.txt', guildcount.toString());
  }

  //Version
  if (fs.existsSync('./version.txt')){
    fs.unlinkSync('./version.txt');
    fs.writeFileSync('./version.txt', package.version.toString());
  } else {
    fs.writeFileSync('./version.txt', package.version.toString());
  }
}