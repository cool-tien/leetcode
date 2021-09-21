/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.filter(s=>s.indexOf("+")!=-1).length-operations.filter(s=>s.indexOf("-")!=-1).length;
};