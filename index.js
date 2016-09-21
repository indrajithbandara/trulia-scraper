var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true, ignoreSslErrors : true, sslProtocol : 'tlsv1', useragent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'})
require("nightmare-xpath"); // xpath function will be added to prototype.

var homeType = '';
var url = 'http://www.trulia.com/';
var property = '26 Vincent St. Newark NJ';
var selector = '#propertyDetails > div.col.cols16.plm > ul > li:nth-child(1)';

nightmare
  .goto(url)
  .insert('#searchbox_form_location', property)
  .click('#searchbox_form > div > button')
  .wait('#propertyDetails')
  .evaluate(function () {
    return document.querySelector('#propertyDetails > div.col.cols16.ptm > ul > li:nth-child(1)').innerText
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
