module.exports.cmd = function() {
      if (choice.length < 1) return message.reply("Please specify either rock, paper or scissors.");
      if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`);
      message.reply(random());

      let evalEmbed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Uh Oh!')
        .setAuthor('Command Disabled')
        .setTimestamp()
        .setDescription('The `rps` (rock, paper, scissors) Command has been disabled since it has not been working for a while,\nThere will be an update in the future to fix this bug.\n\nSorry for the inconvenience!');
      return evalEmbed;
}