var assert = require('assert');
var expect = require('chai').expect;

const CardDeck = require('../model/cardDeck.js')

var cardDeck;

beforeEach(function() {
  cardDeck = new CardDeck();
});

describe('App', function() {
  describe('#cardDeck()', function() {
    it('should contain 52 cards', function() {
      expect(cardDeck.deck.length).to.equal(52);
    });
  });
})
