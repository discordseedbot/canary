//Setup
const db = require("./copypasta.json");
const choiceArray = require("./copypastaArray.json");
var selection;

module.exports.cmd = function() {
	let ceiling = 20;
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
	}
	return selection;
}