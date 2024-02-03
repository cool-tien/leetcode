/**
    [Ugly Solution]

    Time Complexity: O(nm)
        371 ~ 397 ms        (5.09%)
    Space Complexity: O(nm)
        71.12 ~ 72.04 MB    (8.12% ~ 9.10%)
    
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164552307/
        Runtime 371 ms Beats 5.09%; Memory 71.20 MB Beats 9.10%; 
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164557870/
        Runtime 397 ms Beats 5.09%; Memory 72.04 MB Beats 8.12%; 
    https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1164559564/
        Runtime 389 ms Beats 5.09%; Memory 71.12 MB Beats 9.10%; 

 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const existTripletSub = (arr) => {
        let num_i = arr[0];

        for(let j=1; j<arr.length; j++)
            for(let k=j+1; k<arr.length; k++)
                if(num_i < arr[j] && arr[j] < arr[k])
                    return true;
        return false;
    }

    let arr_set = [...new Set(nums)];
    let arrs = [];
    
    if(arr_set.length < 3) return false;
    else if(existTripletSub(arr_set)) return true;

    for(const num of nums){
        arrs.push([num]);
        
        for(let i=0; i<arrs.length; i++){
            if(arrs[i][0] < num){
                arrs[i].push(num);
            }
            
            if(existTripletSub(arrs[i]))
                return true;
        }

    }

    return false;
};