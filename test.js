process.stdin.resume();//so the program will not close instantly
console.log("hi")

process.on('exit', function () {
	console.log("bye");
})
process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit();
});