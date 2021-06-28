/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    set2.forEach((v,k)=>{
       if(set1.has(k))
           res.push(k);
    });
    
    return res;
};