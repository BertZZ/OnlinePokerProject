var assert = require('assert');
var expect = require('chai').expect;

const HandChecker = require('../model/test.js')

describe('HandChecker', function() {

  var handChecker;

  beforeEach(function() {
    handChecker = new HandChecker();
  });

  it('returns a pair', function() {
    cards = ['3s','3c','5h','6h','7h', 'Ts', 'Js']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('pair');
    expect(bestHand.cards).to.deep.equal(['3s', '3c', 'Js', 'Ts', '7h']);
  });

  it('returns two pair', function() {
    cards = ['3s','3h','5d','5c','7d', 'Jc', 'Jh']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('two pair');
    expect(bestHand.cards).to.deep.equal(['Jh', 'Jc', '5d', '5c', '7d']);
  });

  it('returns three of a kind', function() {
    cards = ['6s','6c','6h','5h','7d', 'Qs', 'Kh']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('three of a kind');
    expect(bestHand.cards).to.deep.equal(['6s', '6h', '6c', 'Kh', 'Qs']);
  });

  it('returns a full house', function() {
    cards = ['6s','7c','5s','5c','5h', '7d', '7h']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('full house');
    expect(bestHand.cards).to.deep.equal(['7h', '7d', '7c', '5s', '5h']);
  });

  it('returns a flush', function() {
    cards = ['Ah', 'Jd', '3s', '8s', '5s', '9s', '4s']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('flush');
    expect(bestHand.cards).to.deep.equal([ '9s', '8s', '5s', '4s', '3s' ])
  })

  it('returns a straight', function() {
    cards = [ 'As', '2s', 'Tc', '4h', '5d', '3d', 'Td' ]
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('straight');
    expect(bestHand.cards).to.deep.equal(['As', '5d', '4h', '3d', '2s'])
  });

  it('returns a poker', function() {
    cards = [ 'As', 'Ad', 'Ac', 'Ah', 'Ks', 'Qd', 'Js']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('poker');
    expect(bestHand.cards).to.deep.equal(['As', 'Ah', 'Ad', 'Ac', 'Ks'])
  })

  it('returns a straight flush', function() {
    cards = ['Ts', '2d', '7s', '8s', '6s', '9s', '4h']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('straight flush');
    expect(bestHand.cards).to.deep.equal(['Ts', '9s', '8s', '7s', '6s'])
  })

  it('returns a royal flush', function() {
    cards = ['As', 'Ks', 'Ts', 'Js', '8s', 'Qs', '4h']
    var bestHand = handChecker.bestHand(cards)
    expect(bestHand.name).to.deep.equal('royal flush');
    expect(bestHand.cards).to.deep.equal(['As', 'Ks', 'Qs', 'Js', 'Ts'])
  })

});
