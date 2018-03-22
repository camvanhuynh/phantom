// const webdriverio = require('webdriverio')

console.log("start test")

describe('test phantom', () => {
  it('should open url', () => {
//     var client = webdriverio.remote({
//       "desiredCapabilities": {
//     "browserName": "phantomjs",
//     "javascriptEnabled": true,
//     "acceptSslCerts": true,
//     "phantomjs.cli.args" : ["--ignore-ssl-errors=true"],
//
// }
//     });

  console.log("whyyyyyyyyyy")

    browser.url("https://www.google.com");
    console.log("Started phantom with LM 12");
    button = '.root';
    var text = $(button).getText();


  })
})
