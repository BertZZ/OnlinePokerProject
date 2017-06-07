var should = require('should');
var assert = require('assert');
var expect = require('chai').expect
const Player = require('../model/player.js')
const Game = require('../model/game.js')

describe("Player", function() {
  it('should exist', function(done) {
    var player1 = new Player()
    expect(player1).to.not.be.undefined
    done()
  })

  it('should start with no money', function(){
    var player1 = new Player()
    expect(player1.money).to.equal(0)
  })


  it('should have a hand that is an empty', function() {
    var player1 = new Player()
    expect(player1.hand).to.be.an('array').that.is.empty
  })
})
