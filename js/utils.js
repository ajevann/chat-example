'use strict'

var Utils          = {},
    _LOG_DELIMITER = '|';

Utils.Logger = {};

Utils.Logger.INFO  = 'INFO';
Utils.Logger.ERROR = 'ERROR';
Utils.Logger.WARN  = 'WARN';

Utils.getDateString = function () {
  var date = new Date(),
      dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +
        date.getDate() +' ' + date.getHours() + ':' + date.getMinutes() + ':' +
        date.getSeconds() + ':' + date.getMilliseconds();

  return dateStr;
};

Utils.Logger.log = function (severity, system, location, msg, ipAddress) {
  var dateStr = Utils.getDateString();

  ipAddress = ipAddress || '';

  console.log([dateStr, severity, system, location, msg, ipAddress].join(_LOG_DELIMITER));
};

module.exports = Utils;
