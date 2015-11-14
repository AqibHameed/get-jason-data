var api = require('./get-data.js');
api.orderbook("PKR", function(err, res) {
  console.log(res);
});
api.ticker("CLP", function(err, res) {
  console.log(res);
});
api.trades("VND", function(err, res) {
  console.log(res);
});
