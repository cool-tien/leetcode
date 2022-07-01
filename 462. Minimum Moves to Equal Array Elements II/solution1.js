/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    let min = Infinity;
    
    for(let i=0; i<nums.length; i++){
        let move = nums.map(x=> 
            (x > nums[i])? (x - nums[i]): (nums[i] - x)
        ).reduce((a,b)=>a+b);
        
        if(move < min)
            min = move;
    }
    
    return min;
};