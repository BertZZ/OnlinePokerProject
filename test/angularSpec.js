const express = require('express');
const app = express();
var assert = require('assert');
// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var Browser = require('zombie');
Browser.localhost('example.com', 3000);
// get the application server module
// var app = require('../app.js');

describe('Home Page', function() {

 const browser = new Browser();

  before(function(done) {
    return browser.visit('/', done);
  });

   describe('loading page', function() {
     it('should be successful', function() {
       browser.assert.success();
     });

     it('should have a tile', function() {
       browser.assert.text('h1', 'Poker');
     });
   });

   describe('Start Button', function() {
     it('')
   });

  //  describe('Deal Communal', function() {
  //    it('a back is there before the button is pressed', function() {
  //      browser.assert.elements("#back", 7);
  //    });
   //
  //    it('a king is there after the button is pressed', function() {
  //      browser.pressButton("DEAL COMMUNAL");
  //      browser.assert.elements("#king_s", 1);
  //    });
  //  });
});
