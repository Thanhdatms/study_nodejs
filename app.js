// // CommonJS
// // Modules
// // const intro = require('./1-intro');
// const math = require('./3-math.js');
// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor')
// const test = require('./7-mind-grenade.js')

// // console.log(intro);
// // console.log(math.add(5, 4));
// // console.log(math.subtract(10, 5));
// // console.log(data);
// // console.log(names);


const _ = require('lodash')

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)