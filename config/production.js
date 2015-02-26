module.exports = {
  mongo: {
    url: process.env.MONGOLAB_URI 
  },
  //productionURL: process.env.PRODUCTION_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  Mailchimp: {
  	API_KEY: process.env.MAILCHIMP_API_KEY
  },
  Twitter: {
    API_KEY: process.env.TWITTER_API_KEY,
    API_SECRET: process.env.TWITTER_API_SECRET,
    ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY,
    ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET
  }
};

