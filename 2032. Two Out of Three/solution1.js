/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    //  filter repeat values
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    nums3 = [...new Set(nums3)];
    let res = [];
    
    for(let num of nums1)
        if(nums2.includes(num) || nums3.includes(num))
            res.push(num);
    for(let num of nums2)
        if(nums1.includes(num) || nums3.includes(num))
            res.push(num);
    for(let num of nums3)
        if(nums1.includes(num) || nums2.includes(num))
            res.push(num);
    return [...new Set(res)];
};
