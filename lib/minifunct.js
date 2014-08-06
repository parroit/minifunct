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
    indexOfArray: mkFunct([].indexOf),
    indexOfString: mkFunct(''.indexOf),
    indexOf: function(arr, item){
        if (typeof arr === 'string') {
            return this.indexOfString(arr, item);
        }
        return this.indexOfArray(arr, item);
    }
};
