const ballResponseList = require('./8ball.json');

module.exports.init = function() {
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