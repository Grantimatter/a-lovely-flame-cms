module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    app: {
      keys: env('APP_KEYS'),
    }
  });
  