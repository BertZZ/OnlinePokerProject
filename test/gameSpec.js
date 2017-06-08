var should = require('should');
var assert = require('assert');
var expect = require('chai').expect
const Game = require('../model/game.js')
var CardDeck = require('../model/cardDeck.js');

describe("Game", function() {
  it('should exist', function(done) {
    var game = new Game()
    expect(game).to.not.be.undefined
    done()
  })

  it('should set number of players', function(done) {
    var game = new Game(3)
    expect(game.numberOfPlayers).to.equal(3)
    done()
  })

  it('should deal 2 cards from the top of the deck to each player', function(done){
    var game = new Game(3)
    game.deal();
    expect(game.players[0].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[0].hand).to.have.lengthOf(2);
    expect(game.players[1].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[1].hand).to.have.lengthOf(2);
    expect(game.players[2].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[2].hand).to.have.lengthOf(2);
    done()
  })

  it('should deal 3 cards to the communal cards', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    expect(game.pool).to.be.an('array').that.is.not.empty
    expect(game.pool).to.have.lengthOf(3)
    done()
  })

  it('should deal 1 card on the turn', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    expect(game.pool).to.be.an('array').that.is.not.empty
    expect(game.pool).to.have.lengthOf(4)
    done()
  })

  it('should deal 1 card on the river', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    game.river();
    expect(game.pool).to.be.an('array').that.is.not.empty
    expect(game.pool).to.have.lengthOf(5)
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

  it('should create the number of players that have been selected to play the game', function(done){
    var game = new Game(3)
    expect(game.players).to.be.an('array').that.is.not.empty;
    expect(game.players).to.have.lengthOf(3);
    expect(game.players[0].playerId).to.equal("Player 1")
    expect(game.players[1].playerId).to.equal("Player 2")
    done()
  })
})

it('should start a new round', function(done){
  var game = new Game(3)
  game.deal();
  game.flop();
  game.turn();
  game.river();
  game.newRound();
  expect(game.players[0].hand).to.be.an('array').that.is.empty
  expect(game.players[1].hand).to.be.an('array').that.is.empty
  expect(game.players[2].hand).to.be.an('array').that.is.empty
  expect(game.cardDeck.deck.length).to.equal(52)
  done()
})
