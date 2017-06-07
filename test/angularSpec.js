const express = require('express');
const app = express();

// force the test environment to 'test'
process.env.NODE_ENV = 'test';
var Browser = require('zombie');
// get the application server module


// var app = require('../app.js');

describe('contact page', function() {
  before(function() {
    this.server = app.listen(4000)
    this.browser = new Browser({ site: 'http://localhost:4000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  describe('contact page', function() {
    it('should show contact a form');
    it('should refuse empty submissions');
    it('should refuse partial submissions');
    it('should keep values on partial submissions');
    it('should refuse invalid emails');
    it('should accept complete submissions');
  });

  after(function(done) {
    this.server.close(done);
  });
});
