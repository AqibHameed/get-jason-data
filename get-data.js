var request = require("request");

var publicApi = {};
// get orderbook
publicApi.orderbook = function(currencyCode, callback) {
  var url = "https://api.blinktrade.com/api/v1/" + currencyCode + "/orderbook";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};


// get ticker
publicApi.ticker = function(currencyCode, callback) {
  var url = "https://api.blinktrade.com/api/v1/" + currencyCode + "/ticker";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

// get last 24 trades
publicApi.trades = function(currencyCode, callback) {
  var url = "https://api.blinktrade.com/api/v1/" + currencyCode + "/trades";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

module.exports = publicApi;
