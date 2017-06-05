var assert = require('assert');
var expect = require('chai').expect;

const HandChecker = require('../model/HandChecker.js')

describe('HandChecker', function() {

  var handChecker;
  var cards;

  beforeEach(function() {
    handChecker = new HandChecker();
  });

  it('returns true for a pair', function() {
    cards = [3,3,5,6,7]
    expect(handChecker.pair(cards)).to.equal(true);
  });

  it('returns true for two pair', function() {
    cards = [3,3,5,5,7]
    expect(handChecker.twoPair(cards)).to.equal(true);
  });

  it('returns true for three of a kind', function() {
    cards = [6,6,6,5,7]
    expect(handChecker.threeOfAKind(cards)).to.equal(true);
  });

  it('returns true for full house', function() {
    cards = [6,6,5,5,5]
    expect(handChecker.fullHouse(cards)).to.equal(true);
  });

});
