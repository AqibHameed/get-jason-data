var request = require("request");

var api = {};

// get orderbook
api.orderbook = function() {
  var url = "https://api.blinktrade.com/api/v1/PKR/orderbook";
  request({
    url: url,
    json: true
  }, function(error, response, body) {

    if (!error && response.statusCode === 200) {
      console.log(body); // Print the json response
    }
  });
};

// get ticker
api.ticker = function() {
  var url = "https://api.blinktrade.com/api/v1/PKR/ticker";
  request({
    url: url,
    json: true
  }, function(error, response, body) {

    if (!error && response.statusCode === 200) {
      console.log(body); // Print the json response
    }
  });
};

// get last 24 trades
api.trades = function() {
  var url = "https://api.blinktrade.com/api/v1/PKR/trades";
  request({
    url: url,
    json: true
  }, function(error, response, body) {

    if (!error && response.statusCode === 200) {
      console.log(body); // Print the json response
    }
  });
};

module.exports = api;
