/*
    "throttle" is a concept about handle high-frequency event, it's a bit similar "debounce".
*/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timer = null;
    let next_delay = 0;

    return function(...args) {
        const delay = (timer === null)? 
            0: (next_delay - performance.now());
        
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            next_delay = performance.now() + t;
        }, delay);
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */