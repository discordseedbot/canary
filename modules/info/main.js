module.exports.init = function() {
	require("./server.js").cmd();
	require("./user.js").cmd();
}
