/**
    Time Complexity: O(n log n)
        150 ~ 188 ms    (80.00% ~ 96.00%)
    Space Complexity: O(n)
        56.9 ~ 57.4 MB  (44.00%)

    https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/submissions/866177296/
        Runtime 150 ms, Beats 96.00%; Memory 57.4 MB, Beats 44.00%
    https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/submissions/866179294/
        Runtime 164 ms, Beats 92.00%; Memory 57.2 MB, Beats 44.00%
    https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/submissions/866179717/
        Runtime 188 ms, Beats 80.00%; Memory 56.9 MB, Beats 44.00%

 * 
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let diffs = [];
    let full = 0;

    for(let i=0; i<capacity.length; i++)
        diffs.push(capacity[i] - rocks[i]);

    diffs.sort((a, b) => a - b);

    for(let diff of diffs)
        if(additionalRocks >= diff){
            additionalRocks -= diff;
            full++;
        }
        else
            break;

    return full;
};