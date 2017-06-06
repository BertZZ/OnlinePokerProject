var should = require('should');
var assert = require('assert');
var expect = require('chai').expect
const Game = require('../model/game.js')

describe("Game", function() {
  it('should exist', function(done) {
    var game = new Game()
    expect(game).to.not.be.undefined
    done()
  })

  it('should set number of players', function(done) {
    var game = new Game(3)
    expect(game.players).to.equal(3)
    done()
  })

  it('should start with an empty hands array', function(done) {
    var game = new Game(3)
    expect(game.hands).to.be.an('array').that.is.empty;
    done()
  })

  it('should deal 2 cards from the top of the deck to each player', function(done){
    var game = new Game(3)
    game.deal();
    expect(game.hands[0]).to.be.an('array').that.is.not.empty;
    expect(game.hands[0]).to.have.lengthOf(2);
    expect(game.hands[0]).to.deep.equal([1,4])
    expect(game.hands[1]).to.be.an('array').that.is.not.empty;
    expect(game.hands[1]).to.have.lengthOf(2);
    expect(game.hands[1]).to.deep.equal([2,5])
    expect(game.hands[2]).to.be.an('array').that.is.not.empty;
    expect(game.hands[2]).to.have.lengthOf(2);
    expect(game.hands[2]).to.deep.equal([3,6])
    expect(game.hands[3]).to.be.undefined
    done()
  })

  it('should deal 3 cards to the communal cards', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    expect(game.pool).to.deep.equal([7,8,9])
    done()
  })

  it('should deal 1 card on the turn', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    expect(game.pool).to.deep.equal([7,8,9,10])
    done()
  })

  it('should deal 1 card on the river', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    game.river();
    expect(game.pool).to.deep.equal([7,8,9,10,11])
    done()
  })

  it('should be able to shuffle the deck', function(done){
    var game = new Game(3)
    var game2 = new Game(3)
    var orderedDeck = game.cardDeck
    var shuffledDeck = game2.cardDeck
    shuffledDeck.shuffleDeck()
    expect(shuffledDeck).to.not.equal(orderedDeck)
    done()
  })
})
