/*
 * minifunct
 * https://github.com/parroit/minifunct
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

function mkFunct(fn){
    return fn.call.bind(fn);
}

module.exports = {
    each: mkFunct([].forEach),
    indexOf: mkFunct([].indexOf),
    inArray: function(arr, item){
        return this.indexOf(arr, item) != -1;
    }
};
