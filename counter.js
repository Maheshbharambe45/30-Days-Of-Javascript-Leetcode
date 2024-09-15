/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
   
    return function() {
         let count =n;
        return n++
    };
};
