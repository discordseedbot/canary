const fetchVideoInfo = require('youtube-info');
module.exports.cmd = function(rawargs) {
	var videoID = rawargs.substr(32, 42)
	fetchVideoInfo(videoID, function (err, videoInfo) {
		if (err) throw new Error(err);
		var measuredTime = new Date(null);
		measuredTime.setSeconds(videoInfo.duration);
		duration = measuredTime.toISOString().substr(11, 8).substring(3);

		const videoTitle = videoInfo.title;
		const linkURL = videoInfo.url;
		const commentCount = videoInfo.commentCount
		const viewCount = videoInfo.views;
		const publishDate = videoInfo.datePublished;
		const likeCount = videoInfo.likeCount;
		const dislikeCount = videoInfo.dislikeCount;
		const videoThumbnailUrl = videoInfo.thumbnailUrl;

		const channelName = videoInfo.owner;
		const channelURL = "https://youtube.com/channel/" + videoInfo.channelId;
		const channelThumbnail = videoInfo.channelThumbnailUrl;
		const richEmbedResult = {embed: {
			title: videoTitle,
			url: linkURL,
			author: {
				name: channelName,
				url: channelURL,
				icon_url: channelThumbnail
			},
			fields: [
				{
					name: "View Count:",
					value: viewCount + " views"
				},
				{
					name: "Like and Dislike Count",
					value: ":thumbsup: " + likeCount + "\n:thumbsdown: " + dislikeCount
				},
				{
					name: "Comment Count",
					value: commentCount + " comments"
				},
				{
					name: "Publish Date:",
					value: publishDate + "(DD-MM-YYYY)"
				}
			],
			thumbnail: videoThumbnailUrl,
			timestamp: "Requested at: " + new Date()
		}};
	});
	setTimeout(function(richEmbedResult){console.log(richEmbedResult), 5000})
}