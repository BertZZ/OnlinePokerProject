var assert = require('assert');
var expect = require('chai').expect;

const CardDeck = require('../model/cardDeck.js')

var cardDeck;

beforeEach(function() {
  cardDeck = new CardDeck();
});

describe('CardDeck', function() {
  it('should have a deck containing 52 cards', function() {
    expect(cardDeck.deck.length).to.equal(52);
  });

  describe('#shuffleDeck', function() {
    it('should shuffle the deck array', function() {
      cardDeck.shuffleDeck();
      expect(cardDeck.deck[0]).not.to.equal(1);
    });

    it('should contian 52 unique cards', function() {
      cardDeck.shuffleDeck();
      expect(cardDeck.checkDeck(cardDeck.deck)).to.equal(true);
    });
  });

  describe('#deckCheck', function() {
    it('should check that no duplicates exist in the deck', function() {
      expect(cardDeck.checkDeck([1, 2])).to.equal(true);
      expect(cardDeck.checkDeck([1, 1])).to.equal(false);
    });
  });
});
