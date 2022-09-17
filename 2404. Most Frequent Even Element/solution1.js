/**
    O(3n)
    102~167 ms (74.59%~96.47%)
    49.5~49.9 MB (59.06%~75.29%)

    https://leetcode.com/submissions/detail/801481359/
        Runtime: 102 ms, faster than 96.47% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 49.9 MB, less than 59.06% of JavaScript online submissions for Most Frequent Even Element.
    https://leetcode.com/submissions/detail/801486903/
        Runtime: 157 ms, faster than 77.65% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 49.7 MB, less than 71.06% of JavaScript online submissions for Most Frequent Even Element.
    https://leetcode.com/submissions/detail/801487117/
        Runtime: 167 ms, faster than 74.59% of JavaScript online submissions for Most Frequent Even Element.
        Memory Usage: 49.5 MB, less than 75.29% of JavaScript online submissions for Most Frequent Even Element.

 * @param {number[]} nums
 * @return {number}
 */
 var mostFrequentEven = function(nums) {
    let map = new Map();
    //  object of frequent
    let obj = {
        num: -1,
        appear: 0
    };
    nums = nums.filter(x => x%2 === 0);
    
    for(let num of nums)
        map.set(num, (map.get(num)+1) || 1);
    
    for(let [num, freq] of [...map])
        if(freq >= obj.appear){
            if(freq !== obj.appear)
                obj = {
                    num: num,
                    appear: freq
                };
            else if(num < obj.num)
                obj.num = num;
        }
    
    return obj.num;
};