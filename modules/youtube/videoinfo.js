const fetchVideoInfo = require('youtube-info');
var duration; var commentCount; var viewCount; var publishDate; var likeCount; var dislikeCount; var videoThumbnailUrl; var channelName; var channelURL; var channelThumbnail;
module.exports.cmd = function(videoID) {
	fetchVideoInfo(videoID, function (err, videoInfo) {
	  if (err) throw new Error(err);

	  var measuredTime = new Date(null);
	  measuredTime.setSeconds(videoInfo.duration);
	  duration = measuredTime.toISOString().substr(11, 8).substring(3);

	  videoTitle = videoInfo.title;
	  linkURL = videoInfo.url;
	  commentCount = videoInfo.commentCount
	  viewCount = videoInfo.views;
	  publishDate = videoInfo.datePublished;
	  likeCount = videoInfo.likeCount;
	  dislikeCount = videoInfo.dislikeCount;
	  videoThumbnailUrl = videoInfo.thumbnailUrl;

	  channelName = videoInfo.owner;
	  channelURL = "https://youtube.com/channel/" + videoInfo.channelId;
	  channelThumbnail = videoinfo.channelThumbnailUrl;
	});
	return {embed: {
		"title": videotitle,
		"url": linkURL,
		"author": {
			"name": channelName,
			"url": channelURL,
			"icon_url": channelThumbnail
		},
		"fields": [
		{
			"name": "View Count:",
			"value": viewCount
		},
		{
			"name": "Like and Dislike Count",
			"value": ":thumbsup: " + likeCount + "\n:thumbsdown: " + dislikeCount
		},
		{
			"name": "Comment Count",
			"value": commentCount
		},
		{
			"name": "Publish Date:",
			"value": publishdate
		}],
		"thumbnail": videoThumbnailUrl,
		"timestamp": "Requested at: " + new Date()
	}};
}