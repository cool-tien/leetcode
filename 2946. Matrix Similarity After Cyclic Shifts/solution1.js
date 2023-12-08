/**
    Time Complexity: O(nm)
        59 ~ 66 ms          (53.76% ~ 83.83%)
    Space Complexity: O(nm)
        46.88 ~ 47.03 MB    (18.04% ~ 20.30%)

    https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/submissions/1114764566/
        Runtime 59ms Beats 83.83%; Memory 47.01MB Beats 18.04%; 
    https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/submissions/1114770304/
        Runtime 61ms Beats 75.94%; Memory 47.03MB Beats 18.04%; 
    https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/submissions/1114770506/
        Runtime 66ms Beats 53.76%; Memory 46.88MB Beats 20.30%; 

 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const isSameMat = (arr1, arr2) => {
        let len_y = arr1.length;
        let len_x = arr1[0].length;
        
        for(let i=0; i<len_y; i++)
            for(let j=0; j<len_x; j++)
                if(arr1[i][j] !== arr2[i][j])
                    return false;
        return true;
    }
    
    //  re-assign "k"
    k = k % mat[0].length;
    let mat2 = [];
    
    for(let i=0; i<mat.length; i++){
        mat2.push([
            ...mat[i].slice(k), 
            ...mat[i].slice(0, k), 
        ]);
    }
    
    return isSameMat(mat, mat2);  
};