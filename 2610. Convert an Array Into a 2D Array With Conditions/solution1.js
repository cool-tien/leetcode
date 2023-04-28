/**
    Time Complexity: O(n²)
        88 ~ 104 ms     (40.47% ~ 91.76%)
    Space Complexity: O(n)
        45.9 ~ 46.5 MB  (41.88% ~ 78.35%)
    
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940967968/
        Runtime 88 ms, Beats 91.76%; Memory 46.5 MB, Beats 41.88%; 
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940969861/
        Runtime 98 ms, Beats 61.18%; Memory 45.9 MB, Beats 78.35%; 
    https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/submissions/940970076/
        Runtime 104 ms, Beats 40.47%; Memory 46.2 MB, Beats 56.47%; 

 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const findDistinctIndex = (arr_set, num) => {
        for(let i=0; i<arr_set.length; i++)
            if(!arr_set[i].has(num))
                return i;
        return arr_set.length;
    }

    let output = [];
    let set = new Set();

    for(let num of nums){
        let idx = findDistinctIndex(output, num);
        
        set = output[idx] || new Set();
        set.add(num)

        output[idx] = set;
    }
    
    return output.map(set => [...set]);
};