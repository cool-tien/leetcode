/**
    Time Complexity: O(n²)
        5325 ~ 5533 ms  (7.40% ~ 8.26%)
    Space Complexity: O(n)
        73.6 ~ 115.3 MB (5.47% ~ 94.50^)

    https://leetcode.com/problems/sliding-subarray-beauty/submissions/938214367/
        Runtime 5325 ms, Beats 8.26%; Memory 73.6 MB, Beats 94.50%; 
    https://leetcode.com/problems/sliding-subarray-beauty/submissions/940885549/
        Runtime 5515 ms, Beats 7.40%; Memory 115.3 MB, Beats 5.47%;
    https://leetcode.com/problems/sliding-subarray-beauty/submissions/940885884/
        Runtime 5533 ms, Beats 7.40%; Memory 114.7 MB, Beats 5.47%; 

 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    const getSmallestX = (map, x) => {
        let sub = [...map].sort((arr1, arr2) => arr1[0] - arr2[0]);
        //  index of smalleest
        let idx = 0;
        let smallest_x = sub[0][0];
        
        for(let [key, val] of sub){
            if((idx + val) >= x){
                smallest_x = key;
                break;
            }
            
            idx += val;
        }
        
        return smallest_x;
    }
    
    
    let result = [];
    let last = nums.length - k;
    let map = new Map();
    let sub_len = 0 + k;
    
    for(let j=0; j<sub_len; j++){
        let num = Math.min(nums[j], 0);

        map.set(num, (map.get(num) || 0) + 1);
    }
    
    for(let i=0; i<=last; i++){
        let smallest_x = getSmallestX(map, x);
        
        result.push(smallest_x);
        
        //  update map
        let key = Math.min(nums[i], 0);
        let num = map.get(key);
        
        if(num === 1)
            map.delete(key);
        else
            map.set(key, num - 1);
        
        //  current subarray last index
        let idx = i + k;
        key = Math.min(nums[idx], 0);
        map.set(key, (map.get(key) || 0) + 1);
    }
    
    return result;
};