var request = require("request");

var publicApi = {};
// get orderbook
publicApi.orderbook = function(currencyCode,callback) {
  var url = "https://api.blinktrade.com/api/v1/"+currency_code+"/orderbook";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};


// get ticker
publicApi.ticker = function(currencyCode,callback) {
  var url = "https://api.blinktrade.com/api/v1/"+currency_code+"/ticker";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

// get last 24 trades
publicApi.trades = function(currencyCode,callback) {
  var url = "https://api.blinktrade.com/api/v1/"+currency_code+"/trades";
  request({
    url: url,
    json: true
  }, function(error, response, body) {
    callback(error, body);
  });
};

module.exports = publicApi;
