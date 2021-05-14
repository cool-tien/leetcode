/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    return s.split("").map((c,i,a)=>i%2==0?c:String.fromCharCode(~~a[i]+a[i-1].charCodeAt())).join("");
};