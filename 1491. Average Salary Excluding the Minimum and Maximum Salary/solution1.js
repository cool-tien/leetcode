/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    
    salary = salary.filter(x=>x!=max && x!=min);
    return salary.reduce((a,b)=>a+b) / salary.length;
};