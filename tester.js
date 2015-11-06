var api = require('./get-data.js');
api.orderbook(function(err, res){
  console.log(res);
});
api.ticker(function(err, res){
  console.log(res);
});
api.trades(function(err, res){
  console.log(res);
});
