'use strict';

// var path           = require('path'),
//     morgan         = require('morgan'),
//     bodyParser     = require('body-parser'),
//     compression    = require('compression'),
//     cookieParser   = require('cookie-parser'),
//     methodOverride = require('method-override'),
//     serveStatic    = require('serve-static'),
//     session        = require('express-session'),
//     Config;

/* Configuration Constants
------------------------------------------------------------------------------*/
var Config = {}
// App Versioning
Config.VERSION = '0.1.0';
// App Server Config
Config.PORT            = process.env.PORT           || 3002;
Config.INTERVAL        = process.env.INTERVAL       || 2500;
Config.VIEW_DIR        = process.env.VIEW_DIR       || 'views';
Config.VIEW_ENGINE     = process.env.VIEW_ENGINE    || 'jade';
Config.NODE_ENV        = process.env.NODE_ENV       || 'development';
Config.LOGGER_MODE     = process.env.LOGGER_MODE    || Config.NODE_ENV;
// Config.STATIC_DIR      = process.env.STATIC_DIR     || path.join('..','client','public');
Config.CACHE_TIME      = process.env.CACHE_TIME     || ((process.env.NODE_ENV === 'production') ? 86400000 : 1); // 1 day or 1ms
Config.SESSION_SECRET  = process.env.SESSION_SECRET || '0123456789qwerty';

// /**
//  * Configure the Express server settings.
//  *
//  * @param {Object} server The express server to Configure
//  */
// Config.init = function (server) {
//   server.set('port', Config.PORT)
//     .set('views', path.join(__dirname, Config.VIEW_DIR))
//     .set('view engine', Config.VIEW_ENGINE)
//     .use(compression())
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ 'extended': true }))
//     .use(methodOverride())
//     .use(serveStatic(path.join(__dirname, Config.STATIC_DIR),
//         { maxAge: Config.CACHE_TIME }))
//     .use(cookieParser())
//     .use(session({
//       'resave': true,
//       'saveUninitialized': true,
//       'secret': Config.SESSION_SECRET
//     }));
// };

module.exports = Config;
