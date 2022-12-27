/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let diffs = [];
    let output = 0;

    for(let i=0; i<capacity.length; i++)
        diffs.push(capacity[i] - rocks[i]);

    diffs.sort((a, b) => a - b);

    for(let diff of diffs)
        if(additionalRocks >= diff){
            additionalRocks -= diff;
            output++;
        }
        else
            break;

    return output;
};