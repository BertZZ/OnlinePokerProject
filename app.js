const express = require('express');
const path = require('path');
const cons = require('consolidate');
const Game = require('./model/game.js');
const Player = require('./model/player.js');
const CardDeck = require('./model/cardDeck.js');
const HandChecker = require('./model/handChecker.js')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');
app.engine('html', cons.swig);

app.get('/', function(req, res) {
  var game = new Game(1);
  game.deal()
  var playerHand = game.players[0].hand

  game.flop()
  game.turn()
  game.river()

  var communalCards = game.pool
  var handChecker = new HandChecker();
  var bestHand = handChecker.bestHand(playerHand.concat(communalCards))
  
  res.render('index', {
    playerCards: playerHand,
    communalCards: communalCards,
    hand: bestHand
  })
});

app.listen(port, function() {
  console.log('Server started on port '+ port)
});
