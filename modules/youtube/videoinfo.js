const ytdl = require('ytdl-core');

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

String.prototype.toMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}

module.exports.cmd = async function(rawargs) {
	var videoID = rawargs.substr(32, 42);
	var videoInfo; var output;
		ytdl.getInfo(videoID, function(err, info) {
			videoInfo = info
		})
	await sleep(4000)
		output = {embed: {
			title: videoInfo.title.toString().replace("\'", "'"),
			url: videoInfo.video_url,
			author: {
				name: videoInfo.player_response.videoDetails.author,
				url: videoInfo.author.channel_url
			},
			fields: [
				{
					name: "Basic Info",
					value: videoInfo.player_response.videoDetails.viewCount + " views\nDuration: " + videoInfo.player_response.videoDetails.lengthSeconds.toMMSS() + "\nCategory: " + videoInfo.media.category + "\nAge Restricted (true/false): " + videoInfo.age_restricted
				},
				{
					name: "Description",
					value: videoInfo.player_response.videoDetails.shortDescription
				}
			],
			thumbnail: "https://i.ytimg.com/vi/" + videoInfo.player_response.videoDetails.videoId + "/hqdefault.jpg",
			timestamp: "Requested at: " + new Date()
		}};
	await sleep(5000)
	console.log(output)

	return output;
}