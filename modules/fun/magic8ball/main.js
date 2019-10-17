const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const tokens = require("./../../../token.json");
const prefix = require("./../../../prefix.json").default;

const responseList = require('./8ball.json');

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);

		switch (command) {
			case 'magic8ball':
				var reply;
				let responseNumber = Math.floor(Math.random() * 20) + 1;
				switch(responseNumber) {
					case 1:
						reply = responseList.aa;
						break;
					case 2:
						reply = responseList.bb;
						break;
					case 3:
						reply = responseList.cc;
						break;
					case 4:
						reply = responseList.dd;
						break;
					case 5:
						reply = responseList.ee;
						break;
					case 6:
						reply = responseList.ff;
						break;
					case 7:
						reply = responseList.gg;
						break;
					case 8:
						reply = responseList.hh;
						break;
					case 9:
						reply = responseList.ii;
						break;
					case 10:
						reply = responseList.jj;
						break;
					case 11:
						reply = responseList.kk;
						break;
					case 12:
						reply = responseList.ll;
						break;
					case 13:
						reply = responseList.rrq;
						break;
					case 14:
						reply = responseList.nn;
						break;
					case 15:
						reply = responseList.oo;
						break;
					case 16:
						reply = responseList.pp;
						break;
					case 17:
						reply = responseList.qq;
						break;
					case 18:
						reply = responseList.rr;
						break;
					case 19:
						reply = responseList.ss;
						break;
					case 20:
						reply = responseList.ow;
						break;
				}
				break;
			}
	});

	client.on('ready', () => {
		require("./../console.js").cmdloaded("s!magic8ball");
	});


	client.login(token.discord);
}
