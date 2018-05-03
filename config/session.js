const expressSession = require('express-session');
const ConnectSessionSequelize = require('connect-session-sequelize')(expressSession.Store);
const { sequelize } = require('../app/models');
const { secretSession } = require('./app');

module.exports = {
  secret: secretSession,
  resave: false,
  saveUninitialized: false,
  store: new ConnectSessionSequelize({
    db: sequelize,
    extendDefaultFields(defaults, session) {
      const getUserId = user => (user ? user.id : null);

      return {
        data: defaults.data,
        expires: defaults.expires,
        UserId: getUserId(session.user),
      };
    },
  }),
};
