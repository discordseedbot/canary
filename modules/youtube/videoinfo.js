const ytdl = require('ytdl-core');
const Discord = require('discord.js');

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
	ytdl.getInfo(videoID, function(err, info) {videoInfo = info;})
	await sleep(3500)
	output = new Discord.RichEmbed()
		.setColor("#ff0000")
		.setTitle(videoInfo.player_response.videoDetails.title)
		.setURL("https://youtube.com/watch?v=" + videoInfo.player_response.videoDetails.videoId)
		.setAuthor(videoInfo.player_response.videoDetails.author, videoInfo.author.avatar, videoInfo.author.channel_url)
		.setImage("https://i.ytimg.com/vi/" + videoInfo.player_response.videoDetails.videoId + "/hqdefault.jpg")
		.addField("Description", videoInfo.player_response.videoDetails.shortDescription)
		.addField("Video Information", videoInfo.player_response.videoDetails.viewCount + " views\nDuration: " + videoInfo.player_response.videoDetails.lengthSeconds.toMMSS() + "\nCategory: " + videoInfo.media.category + "\nAge Restricted (true/false): " + videoInfo.age_restricted)
		.setTimestamp()
	await sleep(5000)
	return output;	
}