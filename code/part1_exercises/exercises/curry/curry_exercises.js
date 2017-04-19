require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// var words = function(str) {
//   return split(' ', str);
// };

var words = _.split(' ')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };

var filterQs = _.filter(_.match(/q/i))


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, 0, xs);
// };

var max = reduce(_keepHighest, void 0)


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var _slice = function (start, end, arr) {
  end = end || void 0
  start = start || 0
  return [].slice.call(arr, start, end)
}
var slice = _.curry(_slice)


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = slice(0)


module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
};
