var request = require("request");
module.exports.orderBooks =function () {
        var url = "https://api.blinktrade.com/api/v1/PKR/orderbook"
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
            }
        })
    }
module.exports.ticker =function(){
      var url = "https://api.blinktrade.com/api/v1/PKR/ticker"
      request({
        url: url,
        json: true
      }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
       }
    })
  }
module.exports.trades= function(){
       var url = "https://api.blinktrade.com/api/v1/PKR/trades"
       request({
            url: url,
            json: true
         }, function (error, response, body) {

          if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
           }
      })
}