/**
    O(2n)
    66 ~ 83 ms      (72.52% ~ 93.71%)
    43.6 ~ 44.3 MB  (11.59% ~ 17.55%)

    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863515818/
        Runtime 67 ms, Beats 93.38%; Memory 43.8 MB, Beats 17.22%
    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863517270/
        Runtime 83 ms, Beats 72.52%; Memory 43.6 MB, Beats 17.55%
    https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/863517385/
        Runtime 66 ms, Beats 93.71%; Memory 44.3 MB, Beats 11.59%

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let map = new Map();
    let count = 0;

    //  build each number appear index value
    for(let i=0; i<nums.length; i++){
        let arr = map.get(nums[i]) || [];

        arr.push(i);
        map.set(nums[i], arr);
    }

    for(let arr of [...map.values()])
        for(let i=0; i<arr.length; i++)
            for(let j=i+1; j<arr.length; j++)
                if((arr[i] * arr[j]) % k === 0)
                    count++;
    return count;
};