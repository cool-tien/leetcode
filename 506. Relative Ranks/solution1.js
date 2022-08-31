/**
    O(n²)
    124~175 ms
    44.8~45.5 MB

 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    let rank = {
        1: "Gold Medal", 
        2: "Silver Medal", 
        3: "Bronze Medal"
    };
    let sorted = [...score].sort((a,b) => b-a);
    let placed = [];
    
    for(let num of score){
        let idx = sorted.indexOf(num) + 1;
        let place = (idx <= 3)? rank[idx]: `${idx}`;
        
        placed.push(place);
    }
    
    return placed;
};