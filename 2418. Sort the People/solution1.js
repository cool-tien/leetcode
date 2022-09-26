/**
    O(n log(n))
    
    https://leetcode.com/submissions/detail/808877268/
        Runtime: 155 ms, faster than 100.00% of JavaScript online submissions for Sort the People.
        Memory Usage: 47.8 MB, less than 100.00% of JavaScript online submissions for Sort the People.

 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=0; i<heights.length; i++)
        for(let j=i+1; j<heights.length; j++)
            if(heights[i] < heights[j]){
                [heights[i], heights[j]] = [heights[j], heights[i]];
                [names[i], names[j]] = [names[j], names[i]];
            }
    
    return names;
};