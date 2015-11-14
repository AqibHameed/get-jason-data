//Load the request module
var request = require('request');
//var api = require('./get-data.js');
var crypto = require('crypto');
var key = "nV9LNQ8Wpp1LLfitXXXvhPLPJd604sVjccKRBh6VIUM";
var secret = "8PtD2FNbpJmTJf5F0zcSaYXQnm98gDuvEclaCLIA8m8";
var algo = "sha256";
//var url = 'https://api.blinktrade.com/tapi/v1/message';
var nonce = String(Date.now() * 1e6);
var message = nonce + key + '';
var signature = crypto.createHmac(algo, secret).update(message).digest('hex');
//console.log(signature);
var url = "https://api.blinktrade.com/tapi/v1/message";

var sendMsg = function(msg, callback) {
  //Lets configure and request
  request.post({
    url: url,
    json: true,
    headers: {
      'content-type': 'application/json',
      'key': key,
      'secret': secret,
      'signature': signature
    },
    body: {

      'msg': msg

    }
  }, function(error, response, body) {
    callback(error, msg);
  });
};
// Send a new order
var msg = {
  'MsgType': 'D',
  'ClOrdID': 'client_order_id',
  'Symbol': 'BTCUSD',
  'Side': '1',
  'OrdType': '2',
  'Price': '26381000000',
  'OrderQty': '2723810',
  'BrokerID': '5'
};
// Request Balance
var msg2 = {
  "MsgType": "U2", // Balance Request
  "BalanceReqID": 1 // An ID assigned by you. It can be any number.  The response message associated with this request will contain the same ID.
};
// Request Open Orders
var msg3 = {
  "MsgType": "U4",
  "OrdersReqID": 1,
  "Page": 0,
  "PageSize": 100,
  "Filter": ["has_leaves_qty eq 1"] // Set it to "has_leaves_qty eq 1" to get open orders, "has_cum_qty eq 1" to get executed orders, "has_cxl_qty eq 1" to get cancelled orders
};
// Cancel the order sent in the previous step
msg4 = {
  "MsgType": "F", // Order Cancel Request message. Check for a full doc here: http://www.onixs.biz/fix-dictionary/4.4/msgType_F_70.html
  "ClOrdID": 'client_order_id' // Unique identifier for Order as assigned by you
};
// Generating a bitcoin deposit address
msg5 = {
  "MsgType": "U18", // Deposit request
  "DepositReqID": 1, // Deposit Request ID.
  "Currency": "BTC", // Currency.
  "BrokerID": 5 // Exchange ID
};
sendMsg(msg, function(err, res) {
  console.log(res);
});
