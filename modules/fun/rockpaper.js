const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const token = require("./../../token.json");
const prefix = require("./../../prefix.json").default;

module.exports.cmd = function() {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case 'rps':
				var choice = args.slice(0).join(' ');;
				var botChoice;
				var outcome;
				var result;
				var output;
				if (choice.length < 1){ 
				return "Please specify either rock, paper or scissors.";
				}
				if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
				return "Please specify either rock, paper or scissors. `" + choice + "` isn't one of those :P";
				}


				//Bot Picks Rock, Paper, or Scissors.
				let numbrandomonetothree = Math.floor(Math.random() * 2) + 1; 
				switch (numbrandomonetothree) {
				case 1:
				  botChoice = "rock";  break;
				case 2:
				  botChoice = "paper"; break;
				case 3:
				  botChoice = "scissors"; break;
				}

				//Tie
				if (choice && botChoice === "rock") {
				outcome = "Tie"; result = "Rock - Rock";
				}
				if (choice && botChoice === "paper") {
				outcome = "Tie"; result = "Paper - Paper";
				}
				if (choice && botChoice === "scissors") {
				outcome = "Tie"; result = "Scissors - Scissors";
				}

				//Lost
				if (choice === "rock" && botChoice === "paper") {
				outcome = "You Lost"; result = "Rock - Paper";
				}
				if (choice === "scissors" && botChoice === "rock") {
				outcome = "You Lost"; result = "Scissors - Rock";
				}
				if (choice === "paper" && botChoice === "scissors") {
				outcome = "You Lost"; result = "Paper - Scissors";
				}

				//Won
				if (choice === "rock" && botChoice === "scissors") {
				outcome = "You Won"; result = "Rock - Scissors";
				}
				if (choice === "paper" && botChoice === "rock") {
				outcome = "You Won"; result = "Paper - Rock";
				}
				if (choice === "scissors" && botChoice === "paper") {
				outcome = "You Won"; result = "Scissors - Paper";
				}

				message.channel.send(output = "**" + outcome + "**\n" + result);
				break;
		}
	});

	client.on('ready', () => {
		require("./../functions/console.js").cmdloaded("s!rps");
	})


	client.login(token.discord);
}
