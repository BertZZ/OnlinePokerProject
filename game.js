function Game() {
  this.players = 0
}

Game.prototype.setPlayers = function(number){
  this.players = number
}

module.exports = Game;
