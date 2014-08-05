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

describe('minifunct', function(){
    it('is defined', function(){
      minifunct.should.be.a('function');
    });

});
