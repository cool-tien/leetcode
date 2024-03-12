/**
    Time Complexity: O(n) 
        60 ~ 67 ms          (22.75% ~ 54.03%)
    Space Complexity: O(1) 
        49.88 ~ 50.76 MB    (72.04% ~ 96.68%)
    
    [Time taken: 4m 10s]
    https://leetcode.com/problems/apple-redistribution-into-boxes/submissions/1201072436/
        Runtime 67 ms Beats 22.75%; Memory 50.23 MB Beats 93.36%; 
    https://leetcode.com/problems/apple-redistribution-into-boxes/submissions/1201074410/
        Runtime 60 ms Beats 54.03%; Memory 50.76 MB Beats 72.04%; 
    https://leetcode.com/problems/apple-redistribution-into-boxes/submissions/1201074692/
        Runtime 67 ms Beats 22.75%; Memory 49.88 MB Beats 96.68%; 

 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let total_apple = apple.reduce((acc, cur) => acc + cur, 0);
    let min_boxes = 0;
    let idx = 0;
    
    //  sorting capacity, from larger to smaller
    capacity.sort((a, b) => b - a);
    while(total_apple > 0){
        total_apple -= capacity[idx];
        
        idx++;
        min_boxes++;
    }
    
    return min_boxes;
};