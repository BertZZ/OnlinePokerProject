var CardDeck = require('./cardDeck.js');

function Game(players) {
  this.players = players
  this.hands = []
  this.cardDeck = new CardDeck
  this.pool = []
}

Game.prototype.deal = function(){
  for (i = 0; i < this.players; i++) {
    var hand = []
    var card = this.cardDeck.deck.shift()
    hand.push(card);
    this.hands.push(hand)
  }
  for (i = 0; i < this.players; i++) {
    var card = this.cardDeck.deck.shift()
    this.hands[i].push(card)
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
