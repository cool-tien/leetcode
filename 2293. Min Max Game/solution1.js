/**
    O(n/2)
    76~105 ms
    43.9~44.7 MB

 * @param {number[]} nums
 * @return {number}
 */
 var minMaxGame = function(nums) {
    while(nums.length > 2){
        let arr = [];
        
        for(let i=0; i<nums.length/2; i++)
            (i%2==0)? 
                arr.push(Math.min(nums[i*2], nums[i*2+1])):
                arr.push(Math.max(nums[i*2], nums[i*2+1]));
        nums = [...arr];
    }
    
    return Math.min(nums[0], (nums[1] || Infinity));
};