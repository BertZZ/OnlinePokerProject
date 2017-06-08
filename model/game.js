var CardDeck = require('./cardDeck.js');
var Player = require('./player.js');

function Game(players) {
  this.numberOfPlayers = players

  this.hands = []

  this.cardDeck = new CardDeck()
  this.pool = []
  this.players = []
  for (i = 0; i < this.numberOfPlayers; i++) {
    var player = new Player()
    var number = i + 1
    player.playerId = "Player " + number
    this.players.push(player)
  }
  var rand = Math.floor(Math.random() * 50) + 7
  for (i = 0; i< rand; i++){
    this.shuffleDeck()
  }
}

Game.prototype.shuffleDeck = function(){
  this.cardDeck.shuffleDeck()
}

Game.prototype.dealOneCard = function(){
  for (i = 0; i < this.numberOfPlayers; i++) {
    var card = this.cardDeck.deck.shift()
    this.players[i].hand.push(card)
  }
}

Game.prototype.deal = function(){
  this.dealOneCard()
  this.dealOneCard()
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

Game.prototype.newRound = function(){
  for (i = 0; i < this.numberOfPlayers; i++) {
    this.players[i].hand = []
  }
  this.cardDeck = new CardDeck()
  var rand = Math.floor(Math.random() * 50) + 7
  for (i = 0; i< rand; i++){
    this.shuffleDeck()
  }
}

module.exports = Game;
