const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const tokens = require("./../../token.json");
const prefix = require("./../../prefix.json").music;

module.exports.cmd = function() {
	const music = require('discord.js-musicbot-addon');
	music.start(client, {
	  youtubeKey: token.youtubeapi,
	  cooldown:{
	    disabled:false,
	    timer:10
	  },
	  botPrefix: prefix,
	  anyoneCanSkip: true,
	  anyoneCanAdjust: true,
	  inlineEmbeds: false,
	  logging: false
	});

	client.on('ready', () => {
		require("./../console.js").modloaded("music");
	})

	client.login(token.discord);
}
