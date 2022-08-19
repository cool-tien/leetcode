/**
    O(2n)
    76~129 ms
    43~44 MB

 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
    let max = -Infinity;
    let min = Infinity;
    
    for(let num of nums){
        if(min > num)
            min = num;
        if(max < num)
            max = num;
    }
    
    return nums.filter(x => (x>min && x<max)).length;
};