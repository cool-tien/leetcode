/**
    Time Complexity: O(nm)
        68 ~ 77 ms      (?%)
    Space Complexity: O(1)
        44.3 ~ 44.7 MB  (?%)

    https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/submissions/1052250312/
        Runtime 68 ms, Beats ?%, Memory 44.4 MB, Beats ?%; 
    https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/submissions/1052251928/
        Runtime 77 ms, Beats ?%, Memory 44.3 MB, Beats ?%; 
    https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/submissions/1052252560/
        Runtime 73 ms, Beats ?%, Memory 44.7 MB, Beats ?%; 

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    const countBits = (bit_str) => {
        let count = 0;

        for(const c of bit_str)
            if(c === '1')
                count++;
        return count;
    }

    let output = 0;

    for(let i=0; i<nums.length; i++){
        //  count the number of 1 in bits
        const bits = countBits(i.toString(2));
        const is_same_bits = (k === bits);
        
        if(is_same_bits)
            output += nums[i];
    }
    
    return output;
};