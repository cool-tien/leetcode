/*
    Learning the curry function concept can split into modular function. 
*/
/**
 * @param {Function} fn
 * @return {Function}
 */

/*
var curry = function(fn) {
    return function curried(...args){
        if(args.length >= fn.length)
            return fn(...args);
        
        return (...nextArgs) => curried(...args, ...nextArgs);
    }
};
*/

const curry = fn => {
    return curried = (...args) => 
        (args.length >= fn.length)? 
            fn(...args): 
            (...nextArgs) => curried(...args, ...nextArgs);
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
