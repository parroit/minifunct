/*
 * minifunct
 * https://github.com/parroit/minifunct
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var minifunct = require('../lib/minifunct.js');

describe('minifunct', function() {
    it('is defined', function() {
        minifunct.should.be.a('object');
    });

    describe('minifunct', function() {
        it('is defined', function() {
            minifunct.each.should.be.a('function');
        });

        it('act as foreach', function() {
            var ret = 0;
            minifunct.each([1,2,3,4],function(v){ret+=v;});
            ret.should.be.equal(10);
        });
    });



});
