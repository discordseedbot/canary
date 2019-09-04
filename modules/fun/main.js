const ballResponseList = require('./8ball.json');
const package = require('./../../package.json');
const copypastadb = require("./copypasta.json");
const copypastachoiceArray = require("./copypastaArray.json");


module.exports.copypasta = function() {
	copypastaReset:
	var selection;
	let ceiling = 20;
	let choiceArray = Math.floor(Math.random() * ceiling);
	switch(choiceArray) {
		case 0:
			selection = copypastadb.owo;break;
		case 1:
			selection = copypastadb.tobefair;break;
		case 2:
			selection = copypastadb.shreckrap;break;
		case 3:
			selection = copypastadb.shreklovelife;break;
		case 4:
			selection = copypastadb.jotaro;break;
		case 5:
			selection = copypastadb.transcoochie;break;
		case 6:
			selection = copypastadb.costcoass;break;
		case 7:
			selection = copypastadb.whycringe;break;
		case 8:
			selection = copypastadb.mobileuser;break;
		case 9:
			selection = copypastadb.vsaucecock;break;
		case 10:
			selection = copypastadb.dearliberals;break;
		case 11:
			selection = copypastadb.worstthingseen;break;
		case 12:
			selection = copypastadb.jokermoviereview;break;
		case 13:
			selection = copypastadb.spellwrongdude;break;
		case 14:
			selection = copypastadb.cutedickuwu;break;
		case 15:
			selection = copypastadb.fitnessgrampacertest;break;
		case 16:
			selection = copypastadb.jerksin;break;
		case 17:
			selection = copypastadb.plantonfire;break;
		case 18:
			selection = copypastadb.kidsarefuckingstupid;break;
		case 19:
			selection = copypastadb.fuckkpop;break;
	}
	if (selection === undefined) {
		return require('./main.js').copypasta();
	} else {
		return selection;
	}
}


module.exports.rps = function(choice) {
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

      return output = "**" + outcome + "**\n" + result;
}


module.exports.punch = function(user) {
      if(user !== package.ownerID){
          return 'You have punched <@' + user + '>';
      } else {
          return "you can't hurt him you pleblord.";
      }
}


module.exports.ppsize = function() {
let sizecomment; let ppgraphsize;
    let maxppsize = 24;
    let minppsize = 1;

    let ppsize = Math.floor(Math.random() * maxppsize) + minppsize;

    while (ppgraphsize.length !== ppsize) {
        ppgraphsize += '=';
    }

    let ppgraph = '8' && ppgraphsize && '>'


    if (ppsize <= 2) {
        sizecomment = "that's small, have you gone through puberty yet?";
    }
    if (ppsize <= 5) {
        sizecomment = "I guess that's ok?";
    }
    if (ppsize >= 6) {
        sizecomment = "Wowiees that's a decent size pp";
    }
    if (ppsize >= 12) {
        sizecomment = "'That's a big fella!'";
    }
    if (ppsize >= 20) {
        sizecomment = 'How is that even possible!';
    }

    let finalEmbedMessage = new Discord.RichEmbed
        .setColor('#0099ff')
        .setTitle('PP Size')
        .addFeild('Size (' && ppsize && ' inches)', ppgraph)
        .addFeild('Size Comment', sizecomment)
        .setTimestamp();
    return finalEmbedMessage;
}


module.exports.magic8ball = function() {
	var reply;
	let responseNumber = Math.floor(Math.random() * 20) + 1;
	switch(responseNumber) {
		case 1:
			reply = ballResponseList.aa;
			break;
		case 2:
			reply = ballResponseList.bb;
			break;
		case 3:
			reply = ballResponseList.cc;
			break;
		case 4:
			reply = ballResponseList.dd;
			break;
		case 5:
			reply = ballResponseList.ee;
			break;
		case 6:
			reply = ballResponseList.ff;
			break;
		case 7:
			reply = ballResponseList.gg;
			break;
		case 8:
			reply = ballResponseList.hh;
			break;
		case 9:
			reply = ballResponseList.ii;
			break;
		case 10:
			reply = ballResponseList.jj;
			break;
		case 11:
			reply = ballResponseList.kk;
			break;
		case 12:
			reply = ballResponseList.ll;
			break;
		case 13:
			reply = ballResponseList.rrq;
			break;
		case 14:
			reply = ballResponseList.nn;
			break;
		case 15:
			reply = ballResponseList.oo;
			break;
		case 16:
			reply = ballResponseList.pp;
			break;
		case 17:
			reply = ballResponseList.qq;
			break;
		case 18:
			reply = ballResponseList.rr;
			break;
		case 19:
			reply = ballResponseList.ss;
			break;
		case 20:
			reply = ballResponseList.ow;
			break;
	}
	return reply;
}