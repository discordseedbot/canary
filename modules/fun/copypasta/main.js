const db = require("./copypasta.json");

module.exports.cmd = function(message) {
	var selection = "0";
	var ceiling = 29;
	while(selection < ceiling) {
		let choiceArray = Math.floor(Math.random() * ceiling);
		switch(choiceArray) {
			case 0:
				selection = db.owo;break;
			case 1:
				selection = db.tobefair;break;
			case 2:
				selection = db.shreckrap;break;
			case 3:
				selection = db.shreklovelife;break;
			case 4:
				selection = db.jotaro;break;
			case 5:
				selection = db.transcoochie;break;
			case 6:
				selection = db.costcoass;break;
			case 7:
				selection = db.whycringe;break;
			case 8:
				selection = db.mobileuser;break;
			case 9:
				selection = db.vsaucecock;break;
			case 10:
				selection = db.dearliberals;break;
			case 11:
				selection = db.worstthingseen;break;
			case 12:
				selection = db.jokermoviereview;break;
			case 13:
				selection = db.spellwrongdude;break;
			case 14:
				selection = db.cutedickuwu;break;
			case 15:
				selection = db.fitnessgrampacertest;break;
			case 16:
				selection = db.jerksin;break;
			case 17:
				selection = db.plantonfire;break;
			case 18:
				selection = db.kidsarefuckingstupid;break;
			case 19:
				selection = db.fuckkpop;break;
			case 20:
				selection = db.btsboyband;break;
			case 21:
				selection = db.ps2fknxtreme;break;
			case 22:
				selection = db.notnatutorunning;break;
			case 23:
				selection = db.replyto69;break;
			case 24:
				selection = db.oogaboogaprofessor;break;
			case 25:
				selection = db.rslashwoooosh;break;
			case 26:
				selection = db.kfclovekfclife;break;
			case 27:
				selection = db.mamasaid;break;
			case 28:
				selection = db.phantomshitter;break;
		}
			message.channel.send(selection);
	}
}
