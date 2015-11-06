var request = require("request");

var publicApi = {};

// get orderbook
publicApi.orderbook = function(callback) {
  var url = "https://api.blinktrade.com/api/v1/PKR/orderbook";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};


// get ticker
publicApi.ticker = function(callback) {
  var url = "https://api.blinktrade.com/api/v1/PKR/ticker";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

// get last 24 trades
publicApi.trades = function(callback) {
  var url = "https://api.blinktrade.com/api/v1/PKR/trades";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

module.exports = publicApi;
