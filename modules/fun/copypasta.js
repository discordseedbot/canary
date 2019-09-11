const copypastadb = require("./copypasta.json");
const copypastachoiceArray = require("./copypastaArray.json");

module.exports.init = function() {
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