var CardDeck = require('./cardDeck.js');
var Player = require('./player.js');

function Game(players) {
  this.numberOfPlayers = players
  this.hands = []
  this.cardDeck = new CardDeck
  this.pool = []
  this.players = []
  for (i = 0; i < this.numberOfPlayers; i++) {
    var player = new Player
    this.players.push(player)
  }
}

Game.prototype.deal = function(){
  for (i = 0; i < this.numberOfPlayers; i++) {
    var card = this.cardDeck.deck.shift()
    this.players[i].hand.push(card)
  }
  for (i = 0; i < this.numberOfPlayers; i++) {
    var card = this.cardDeck.deck.shift()
    this.players[i].hand.push(card)
  }
}

Game.prototype.flop = function(){
  for (i = 0; i < 3; i++){
    var card = this.cardDeck.deck.shift()
    this.pool.push(card)
  }
}

Game.prototype.turn = function(){
  var card = this.cardDeck.deck.shift()
  this.pool.push(card)
}

Game.prototype.river = function(){
  var card = this.cardDeck.deck.shift()
  this.pool.push(card)
}

module.exports = Game;
