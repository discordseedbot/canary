const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").music;

module.exports.cmd = function() {
	require("./../functions/console.js").modloaded("music");
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
		require('./../functions/console.js').cmdloaded("music")
	})

	client.login(token.discord);
}
