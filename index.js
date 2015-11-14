//Load the request module
var request = require('request');
var crypto = require('crypto');
var privateApi = function(apiKey, apiSecret) {
  var self = this;
  this.apiKey = apiKey;
  this.apiSecret = apiSecret;
  this.sendMsg = function(msg, callback) {
    var algo = "sha256";
    var url = 'https://api.blinktrade.com/tapi/v1/message';
    var nonce = String(Date.now() * 1e6);
    var message = nonce + key + '';
    var signature = crypto.createHmac(algo, secret).update(message).digest('hex');
    //Lets configure and request
    request.post({
      url: url,
      json: true,
      headers: {
        'content-type': 'application/json',
        'key': self.key,
        'secret': self.secret,
        'signature': signature
      },
      body: {

        'msg': msg

      }
    }, function(error, response, body) {
      callback(error, msg);
    });
  };
  this.newOrder = function(currency, callback) {
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
    this.sendMsg(msg, function(err, res) {
      console.log(res);
    });


  };
  this.requestBalance = function(currency, callback) {
    var msg = {
      "MsgType": "U2", // Balance Request
      "BalanceReqID": 1 // An ID assigned by you. It can be any number.  The response message associated with this request will contain the same ID.
    };
    this.sendMsg(msg, function(err, res) {
      console.log(res);
    });

  };
  this.openOrder = function(currency, callback) {
    var msg = {
      "MsgType": "U4",
      "OrdersReqID": 1,
      "Page": 0,
      "PageSize": 100,
      "Filter": ["has_leaves_qty eq 1"] // Set it to "has_leaves_qty eq 1" to get open orders, "has_cum_qty eq 1" to get executed orders, "has_cxl_qty eq 1" to get cancelled orders
    };
    this.sendMsg(msg, function(err, res) {
      console.log(res);
    });

  };
  this.cancelOrder = function(currency, callback) {
    var msg = {
      "MsgType": "F", // Order Cancel Request message. Check for a full doc here: http://www.onixs.biz/fix-dictionary/4.4/msgType_F_70.html
      "ClOrdID": 'client_order_id' // Unique identifier for Order as assigned by you
    };
    this.sendMsg(msg, function(err, res) {
      console.log(res);
    });

  };
  this.depositAddress = function(currency, callback) {
    var msg = {
      "MsgType": "U18", // Deposit request
      "DepositReqID": 1, // Deposit Request ID.
      "Currency": "BTC", // Currency.
      "BrokerID": 5 // Exchange ID
    };
    this.sendMsg(msg, function(err, res) {
      console.log(res);
    });

  };
};
