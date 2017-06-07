var assert = require('assert');
var expect = require('chai').expect;

const HandChecker = require('../model/test.js')

describe('HandChecker', function() {

  it('returns a pair', function() {
    cards = ['3s','3c','5h','6h','7h', 'Ts', 'Js']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { pair: ['3s', '3c', 'Js', 'Ts', '7h'] } );
  });

  it('returns two pair', function() {
    cards = ['3s','3h','5d','5c','7d', 'Jc', 'Jh']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { twoPair: ['Jh', 'Jc', '5d', '5c', '7d'] } );
  });

  it('returns three of a kind', function() {
    cards = ['6s','6c','6h','5h','7d', 'Qs', 'Kh']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { threeOfAKind: ['6s', '6h', '6c', 'Kh', 'Qs'] } );
  });

  it('returns a full house', function() {
    cards = ['6s','7c','5s','5c','5h', '7d', '7h']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { fullHouse: ['7h', '7d', '7c', '5s', '5h'] } );
  });

  it('returns a flush', function() {
    cards = ['Ah', '2d', '3s', '8s', '5s', '9s', '4s']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { flush: [ '9s', '8s', '5s', '4s', '3s' ] } )
  })

  it('returns a straight', function() {
    cards = [ 'As', '2s', 'Tc', '4h', '5d', '3d', 'Td' ]
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal({ straight: ['As', '5d', '4h', '3d', '2s'] } )
  });

  it('returns a poker', function() {
    cards = [ 'As', 'Ad', 'Ac', 'Ah', 'Ks', 'Qd', 'Js']
    handChecker = new HandChecker(cards)
    expect(handChecker.bestHand()).to.deep.equal( { poker: ['As', 'Ah', 'Ad', 'Ac', 'Ks'] } )
  })

});
