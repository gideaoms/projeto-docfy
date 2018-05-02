const expressSession = require('express-session');
const ConnectSessionSequelize = require('connect-session-sequelize')(expressSession.Store);
const sequelize = require('./sequelize');
const { secretSession } = require('./app');

module.exports = {
  secret: secretSession,
  resave: false,
  saveUninitialized: false,
  store: new ConnectSessionSequelize({
    db: sequelize,
  }),
};
