module.exports = {
  mongo: {
    url: 'mongodb://127.0.0.1/peacefulSplinter'
  },
  productionURL: process.env.PRODUCTION_URL,
  JWT_SECRET: 'process.env.JWT_SECRET',
  Twitter: {
    API_KEY: process.env.TWITTER_API_KEY,
    API_SECRET: process.env.TWITTER_API_SECRET
  }
};
