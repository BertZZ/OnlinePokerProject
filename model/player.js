function Player(){
  this.hand = []
  this.money = 0
  this.playerId = null
  this.isFolded = false
}

Player.prototype.fold = function(){
  this.isFolded = true
}

module.exports = Player
