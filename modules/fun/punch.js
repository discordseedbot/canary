const package = require('./package.json');
modules.export.cmd = function(user) {
      if(user !== package.ownerID){
          message.reply('You have punched <@' + user.id + '>')
      } else {
          message.reply("you can't hurt him you pleblord.")
      }
}