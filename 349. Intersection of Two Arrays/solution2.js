/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let ref = new Set(nums1);
    let set = new Set();
    
    nums2.forEach((x)=>{
       if(ref.has(x))
           set.add(x);
    });
    
    return [...set];
};