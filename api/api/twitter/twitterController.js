// var passport = require('passport');
var Twitter = require('twitter');


exports.twitterFollowers = function (req, res) {

	// once decoded, find 'where token id (name) matches our database name'
		// check to see if this person has a web token.
		// if so, make the call with it and return data
	var client = new Twitter({
	  // API_KEY: $config.twitter.API_KEY,
   	  // API_SECRET: $config.facebook.API_SECRET,
    consumer_key: $config.Twitter.API_KEY,
    consumer_secret: $config.Twitter.API_SECRET,
	  access_token_key: $config.Twitter.ACCESS_TOKEN_KEY,
	  access_token_secret: $config.Twitter.ACCESS_TOKEN_SECRET

	});
	
	var data = {
		screen_name: 'arunvs21',
		followersCount: 'followersCount',
		description: 'description'
	}

  //var params = {screen_name: 'arunvs21'};
  // statuses/user_timeline
  // friends/list
  // followers/list
	client.get('followers/list', data, function(error, followers, response){
	  //if (!error) {
    //   var username = {
    //     'follow': followers.users[0].length,
    //     'followDate': [],
    //     'locations': []
    //   }
	  	// var user = followers['users'][0];
	  	// for (var i = 0; i < user.length; i++) {
	  	// 	//console.log(users[i]['followers_count']);
    //     users.followDate.push(followers.users[0]['created_at']);
    //     users.locations.push(followers.users[0]['location']);
	  	// }
      //console.log(users);
      res.send(followers);
	  	// res.send(followers.users[0]['created_at']);
	  	// console.log('Followers retrieval successful');
	  	// console.log(followers);
	  	//res.send(followers);
	    //console.log(tweets);
	  //}
	});
  
};

// exports.twitterMentions = function (req, res) {
// 	// once decoded, find 'where token id (name) matches our database name'
// 		// check to see if this person has a web token.
// 		// if so, make the call with it and return data
// 	var client = new Twitter({
// 	  // API_KEY: $config.twitter.API_KEY,
//    	  // API_SECRET: $config.facebook.API_SECRET,
// 	  consumer_key: 'bL9j8Lj2NCh13knSterEaS9lI',
// 	  consumer_secret: 'mHKrS9WYYEBeF7gNA5wT6HzfsO2HGwp1K2AltiecFBB6OE0ySI',
// 	  access_token_key: '590714963-ge2SCxUguz04xAQtAAwZM4H8IsXCSczVo16ifeVj',
// 	  access_token_secret: 'IfAnMqBEhHgRERiUTadbacjyzoTBPjxAGkIGfz3WnRZje'

// 	});
	 
// 	var params = {screen_name: 'arunvs21'};
//   // statuses/user_timeline
//   // friends/list
//   // followers/list
// 	client.get('statuses/mentions_timeline', params, function(error, mentions, response){
// 	  if (!error) {

// 	  	console.log(tweets);
// 	  	res.send(tweets);
// 	    //console.log(tweets);
// 	  }
// 	});

// };

// exports.twitterRetweets = function (req, res) {
// 	// once decoded, find 'where token id (name) matches our database name'
// 		// check to see if this person has a web token.
// 		// if so, make the call with it and return data
// 	var client = new Twitter({
// 	  // API_KEY: $config.twitter.API_KEY,
//    	  // API_SECRET: $config.facebook.API_SECRET,
// 	  consumer_key: 'bL9j8Lj2NCh13knSterEaS9lI',
// 	  consumer_secret: 'mHKrS9WYYEBeF7gNA5wT6HzfsO2HGwp1K2AltiecFBB6OE0ySI',
// 	  access_token_key: '590714963-ge2SCxUguz04xAQtAAwZM4H8IsXCSczVo16ifeVj',
// 	  access_token_secret: 'IfAnMqBEhHgRERiUTadbacjyzoTBPjxAGkIGfz3WnRZje'

// 	});
	 
// 	var params = {screen_name: 'arunvs21'};
// 	// statuses/user_timeline
// 	// friends/list
// 	// followers/list
// 	client.get('statuses/retweets_of_me', params, function(error, retweets, response){
// 	  if (!error) {
// 	  	// console.log(tweets);
// 	  	// res.send(tweets);
// 	    //console.log(tweets);
// 	  }
// 	});

// };