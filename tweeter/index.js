class Tweet {
  constructor(data) {
    this.displayName = data.displayName;
    this.userName = data.userName;
    this.timeAgo = data.timeAgo;
    this.content = data.content;
    this.image = data.image;
  }

  html() {
    const tweetSection = document.getElementById("tweets");

    const ophalenTweet = document.getElementById("tweetLayout");
    const tweetArticle = ophalenTweet.content.cloneNode(true);

    tweetArticle.querySelector(".displayName").innerHTML = this.displayName;
    tweetArticle.querySelector(".userName").innerHTML = this.userName;
    tweetArticle.querySelector(".timeAgo").innerHTML = this.timeAgo;
    tweetArticle.querySelector(".textContent").innerHTML = this.content;
    tweetArticle.querySelector(".image").innerHTML = this.image;

    tweetSection.appendChild(tweetArticle);
  }
}

class TweetList {
  constructor() {
    fetch("./tweets.json")
      .then((response) => response.json())
      .then((data) => this.parse(data));
  }

  parse(data) {
    document.getElementById("tweets").innerHTML = "";

    this.tweets = data.map((data) => new Tweet(data));
    this.tweets.forEach((tweet) => tweet.html());
  }
}

const tweetList = new TweetList();

// function createTweet(tweet) {
//   const tweetSection = document.getElementById("tweets");

//   const ophalenTweet = document.getElementById("tweetLayout");
//   const tweetArticle = ophalenTweet.content.cloneNode(true);

//   tweetArticle.querySelector(".displayName").innerHTML = tweet.displayName;
//   tweetArticle.querySelector(".userName").innerHTML = tweet.userName;
//   tweetArticle.querySelector(".timeAgo").innerHTML = tweet.timeAgo;
//   tweetArticle.querySelector(".textContent").innerHTML = tweet.content;
//   tweetArticle.querySelector(".image").innerHTML = tweet.image;

//   tweetSection.appendChild(tweetArticle);
// }

/**@param {Array} tweetArray */

// function parseTweets(tweetArray) {
//   const tweets = tweetArray.map((data) => new Tweet(data));

//   tweets.foreach((tweet) => tweet.html());
//   for (const tweet of tweetArray) {
//     console.log(tweetArray.length);
//     createTweet(tweet);
//   }

//   tweetArray.forEach((tweet) => console.log(tweet.userName));
// }

// function loadTweets() {
//   fetch("./tweets.json")
//     .then((response) => response.json())
//     .then(parseTweets);
// }

// // loadTweets();

// const testTweet = new Tweet({
//   displayName: "John",
//   userName: "@JohnWest",
//   timeAgo: "15h",
//   content: "Test tweet",
//   image: "https://picsum.photos/200/300",
// });

// testTweet.html();
