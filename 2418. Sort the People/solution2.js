/**
    O(n log(n))

    https://leetcode.com/submissions/detail/808879038/
        Runtime: 136 ms, faster than 100.00% of JavaScript online submissions for Sort the People.
        Memory Usage: 47.4 MB, less than 100.00% of JavaScript online submissions for Sort the People.

 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    let res = [];
    
    for(let i=0; i<heights.length; i++)
        res.push({
            name: names[i],
            height: heights[i]
        });
    
    res.sort((a, b) => b.height-a.height);
    return res.map(obj => obj.name);
};