const config = require('./../../config.json');
const axios = require("axios");
var videolink = "https://www.youtube.com/watch?v=ZpdvnHVIeyI";

//module.exports.cmd = function(videolink) {
var key = config.ytapi;
videolink = videolink.replace("https://www.youtube.com/watch?v=", "");
var videoID = videolink.substring(0,11);
console.log(videoID)
function getComments(pageToken, allItems = {}) {
  const params = {
    key,
    videoId: videoID,
    part: "snippet",
    maxResults: 100,
    pageToken,
    textFormat: "plainText",
  };

  console.log(`Fetching page: ${pageToken || "First Page"}`);
  console.log(`Total Comments: ${Object.keys(allItems).length}`);

  return axios.get("https://www.googleapis.com/youtube/v3/commentThreads/", {params})
    .then(({ data: { nextPageToken, items } }) => {
      items.forEach((item) => {
        const id = item.snippet.topLevelComment.snippet.authorChannelId.value;
        //store user ID by key to prevent duplicates
        allItems[id] = item.snippet.topLevelComment.snippet;
      });

      if (nextPageToken) {
        return getComments(nextPageToken, allItems)
      }

      return allItems;
    })
    .catch(({response: {data}}) => console.log(data.error))
  ;
}

getComments().then((allComments) => {
  const totalCount = Object.keys(allComments).length;
  const winner = Math.floor(Math.random() * (totalCount-1) ) + 0;
  const winningId = Object.keys(allComments)[winner];
  const winnerName = allComments[winningId].authorDisplayName;
  const winnerText = allComments[winningId].textDisplay;

  console.log(`\n\nTotal Unique Entries: ${totalCount}`);
  console.log(`Winner Number: ${winner}`);
  console.log(`Winning ID: ${winningId}`);
  process.stdout.write("\nAnd the winner is...");

  const dotsInterval = setInterval(() => { process.stdout.write(".");}, 300);

  setTimeout(() => {
    clearInterval(dotsInterval);
    console.log(`
    ${winnerName}
    winning comment: "${winnerText}"
    `);
  }, 5000)
});
//}