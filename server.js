const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const expressSession = require('express-session');
const connectFlash = require('connect-flash');
const methodOverride = require('method-override');
const path = require('path');
const routes = require('./app/routes');
const sessionConfig = require('./config/session');
const { port } = require('./config/app');

const app = express();

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');
app.use(express.static(path.resolve('public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession(sessionConfig));
app.use(connectFlash());
app.use(methodOverride('_method'));
app.use(routes);

app.listen(port, err => global.console.log(err || 'Running...'));
