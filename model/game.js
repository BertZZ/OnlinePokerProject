function Game(players) {
  this.players = players
  this.hands = []
  this.deck = [1,2,3,4,5,6,7,8,9,10,11]
  this.pool = []
}

Game.prototype.deal = function(){
  for (i = 0; i < this.players; i++) {
    var hand = []
    var card = this.deck.shift()
    hand.push(card);
    this.hands.push(hand)
  }
  for (i = 0; i < this.players; i++) {
    var card = this.deck.shift()
    this.hands[i].push(card)
  }
}

Game.prototype.flop = function(){
  for (i = 0; i < 3; i++){
    var card = this.deck.shift()
    this.pool.push(card)
  }
}

Game.prototype.turn = function(){
  var card = this.deck.shift()
  this.pool.push(card)
}

Game.prototype.river = function(){
  var card = this.deck.shift()
  this.pool.push(card)
}
module.exports = Game;
