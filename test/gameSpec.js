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
    expect(game.numberOfPlayers).to.equal(3)
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
    expect(game.players[0].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[0].hand).to.have.lengthOf(2);
    expect(game.players[0].hand).to.deep.equal(['As','Ac'])
    expect(game.players[1].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[1].hand).to.have.lengthOf(2);
    expect(game.players[1].hand).to.deep.equal(['Ah','Ks'])
    expect(game.players[2].hand).to.be.an('array').that.is.not.empty;
    expect(game.players[2].hand).to.have.lengthOf(2);
    expect(game.players[2].hand).to.deep.equal(['Ad','Kh'])
    done()
  })

  it('should deal 3 cards to the communal cards', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    expect(game.pool).to.deep.equal([ 'Kd', 'Kc', 'Qs' ])
    done()
  })

  it('should deal 1 card on the turn', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    expect(game.pool).to.deep.equal([ 'Kd', 'Kc', 'Qs', 'Qh' ])
    done()
  })

  it('should deal 1 card on the river', function(done){
    var game = new Game(3)
    game.deal();
    game.flop();
    game.turn();
    game.river();
    expect(game.pool).to.deep.equal([ 'Kd', 'Kc', 'Qs', 'Qh', 'Qd' ])
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
    done()
  })
})
