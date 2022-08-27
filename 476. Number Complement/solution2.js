/**
    O(n)
    48~66 ms (85.15%~100%)
    42.1~42.3 MB (10.77%~51.79%)

 * @param {number} num
 * @return {number}
 */
 const findComplement = num =>
    parseInt(num.toString(2).split("").map(c => (c === '0')? '1': '0').join(""), 2);
