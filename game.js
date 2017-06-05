function Game(players) {
  this.players = players
  this.hands = []
  this.cards = [1,2,3,4,5,6,7,8,9,10]
}

Game.prototype.deal = function(){
  for (i = 0; i < this.players; i++) {
    var hand = []
    var card = this.cards.shift()
    console.log(card)
    hand.push(card);
    console.log(hand)
    this.hands.push(hand)
  }
  for (i = 0; i < this.players; i++) {
    var card = this.cards.shift()
    this.hands[i].push(card)
  }
}

module.exports = Game;
