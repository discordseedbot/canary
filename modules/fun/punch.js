const package = require('./../../package.json');

module.exports.init = function(user) {
      if(user !== package.ownerID){
          return 'You have punched <@' + user + '>';
      } else {
          return "you can't hurt him you pleblord.";
      }
}
