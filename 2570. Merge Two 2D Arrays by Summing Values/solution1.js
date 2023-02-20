/**
    Time Complexity: O(n log n)

    Space Complexity: O(n)


    https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/submissions/901262513/
        Runtime 81 ms, Memory 46.3 MB
    https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/submissions/901262602/
        Runtime 81 ms, Memory 45.9 MB
    https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/submissions/901262643/
        Runtime 71 ms, Memory 46.1 MB

 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let map1 = new Map(nums1);
    let map2 = new Map(nums2);

    //  re-assign longer size become map1
    if(map2.size > map1.size)
        [map1, map2] = [map2, map1];
    
    for(let [key, value] of map2){
        //  sum the same key 
        if(map1.has(key))
            map1.set(key, map1.get(key) + map2.get(key));
        else
            map1.set(key, map2.get(key));
    }

    //  sort order by key id
    return [...map1].sort((arr1, arr2) => arr1[0] - arr2[0]);
};