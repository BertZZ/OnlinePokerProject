var assert = require('assert');
var expect = require('chai').expect;

const HandChecker = require('../model/HandChecker.js')

describe('HandChecker', function() {

  it('returns a pair', function() {
    cards = ['3s','3c','5h','6h','7h', 'Ts', 'Js']
    handChecker = new HandChecker(cards)
    expect(handChecker.pair()).to.deep.equal(['3s', '3c', 'Js', 'Ts', '7h']);
  });

  it('returns two pair', function() {
    cards = ['3s','3h','5d','5c','7d', 'Jc', 'Jh']
    handChecker = new HandChecker(cards)
    expect(handChecker.twoPair()).to.deep.equal(['Jh', 'Jc', '7d', '5d', '5c']);
  });

  it('returns three of a kind', function() {
    cards = ['6s','6c','6h','5h','7d', 'Qs', 'Kh']
    handChecker = new HandChecker(cards)
    expect(handChecker.threeOfAKind()).to.deep.equal(['6s', '6h', '6c', 'Kh', 'Qs']);
  });

  it('returns a full house', function() {
    cards = ['6s','6c','5s','5c','5h', '7d', '9h']
    handChecker = new HandChecker(cards)
    expect(handChecker.fullHouse()).to.equal(true);
  });

  it('returns a flush', function() {
    cards = ['Ah', '2d', '3s', '8s', '5s', '9s', '4s']
    handChecker = new HandChecker(cards)
    expect(handChecker.flush()).to.deep.equal([ '9s', '8s', '5s', '4s', '3s' ])
  })

  it('returns a straight', function() {
    cards = [ 'As', '2s', 'Jc', '4h', '5d', '3d', 'Td' ]
    handChecker = new HandChecker(cards)
    expect(handChecker.straight()).to.equal(true)
  });

  it('returns a poker', function() {
    cards = [ 'As', 'Ad', 'Ac', 'Ah', 'Ks', 'Qd', 'Js']
    handChecker = new HandChecker(cards)
    expect(handChecker.poker()).to.deep.equal(['As', 'Ah', 'Ad', 'Ac', 'Ks'])
  })

});
