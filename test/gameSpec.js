var should = require('should');
var assert = require('assert');
var expect = require('chai').expect

const Game = require('../game.js')

describe('5', function() {
  it('should be 5', function(done) {
    (5).should.be.exactly(5).and.be.a.Number();
    done();
  })
})

describe("Game", function() {
  it('should exist', function(done) {
    var game = new Game
    expect(game).to.not.be.undefined
    done()
  })
})
