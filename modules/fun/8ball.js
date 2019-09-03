const responseList = require('./8ball.json');
var reply;
module.exports.cmd = function() {
	let responseNumber = Math.floor(Math.random() * 20) + 1;
	switch(responseNumber) {
		case 1:
			reply = aa.responseList;
			break;
		case 2:
			reply = bb.responseList;
			break;
		case 3:
			reply = cc.responseList;
			break;
		case 4:
			reply = dd.responseList;
			break;
		case 5:
			reply = ee.responseList;
			break;
		case 6:
			reply = ff.responseList;
			break;
		case 7:
			reply = gg.responseList;
			break;
		case 8:
			reply = hh.responseList;
			break;
		case 9:
			reply = ii.responseList;
			break;
		case 10:
			reply = jj.responseList;
			break;
		case 11:
			reply = kk.responseList;
			break;
		case 12:
			reply = ll.responseList;
			break;
		case 13:
			reply = rrq.responseList;
			break;
		case 14:
			reply = nn.responseList;
			break;
		case 15:
			reply = oo.responseList;
			break;
		case 16:
			reply = pp.responseList;
			break;
		case 17:
			reply = qq.responseList;
			break;
		case 18:
			reply = rr.responseList;
			break;
		case 19:
			reply = ss.responseList;
			break;
		case 20:
			reply = ow.responseList;
			break;
	}
	return reply;
}