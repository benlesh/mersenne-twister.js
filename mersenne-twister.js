/**
 * MarsenneTwister
 * (c) 2013 Ben Lesh
 * http://www.benlesh.com
 * MIT License
 */
 
function MersenneTwister(seed) {
    'use strict';
    
    var mt = [seed],
        mtLen = 624,
        _32bits = 0xFFFFFFFF,
        last32 = 18122433253 & _32bits,
        index = 0;

    for (i = 1; i < mtLen; i++) {
        mt[i] = last32 * (mt[i - 1] ^ (mt[i - 1] >> 30)) + 1;
    }

    this.next = function () {
        if (index === 0) {
            generate();
        }

        var y = mt[index];
        y ^= (y >> 11);
        y ^= (y << 7) & 0x9d2c5680;
        y ^= (y << 15) & 0xefc60000;
        y ^= y >> 18;

        index = (index + 1) % mtLen;
        return y;
    };

    function generate() {
        var i, y;
        for (i = 0; i < mtLen; i++) {
            y = (mt[i] & 0x80000000) + (mt[(i + 1) % mtLen] & 0x7fffffff);
            mt[i] = mt[(i + 397) % mtLen] ^ (y >> 1);
            if (y % 2 !== 0) {
                mt[i] = mt[i] ^ 0x9908b0df;
            }
        }
    }
}
