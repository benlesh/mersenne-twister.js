mersenne-twister.js
===================

**MIT Licensed**

A JavaScript implementation of the Mersenne Twister Psuedo Random number generator.

Generates uniformly random integers between 0 and 0x100000000. As it's psuedo-random, 
using the same seed twice will generate the same set of numbers.

Based off of pseudo-code found on the [Wikipedia Article about Mersenne Twister](http://en.wikipedia.org/wiki/Mersenne_twister)

##Usage

```JavaScript
//get a seed
var seed = 1234,

    //create a new generator, passing a seed value.
    gen = new MersenneTwister(seed),
    
    i, rand;
    
for(i = 0; i < 10; i++) {

    //use .next() to get the next random value.
    rand = gen.next();
    
    //this is "pseudo-random" so, every time we seed
    //the generator with 1234, the first random value 
    //will be 272848313
    console.log(rand); //272848313
}
```
