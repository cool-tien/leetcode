/*
https://leetcode.com/problems/boats-to-save-people/submissions/1249829837/

# Intuition
My first try is using Map without sorting, so I'm stuck at some test cases.

# Approach
1. Sorting the people, then define index of left as i and right as j.
2. Looping until left across right (i > j).
3. There are two situation: 
  a. smaller weight + larger weight, below than limit of weight. 
  b. only enough to put larger weight. 

w1 = smaller weight; w2 = larger weight;

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(1)

*/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let l = 0;
    let r = people.length - 1;
    let boats = 0;
    
    while(l <= r){
        //  weight of index l and r
        let w1 = people[l]; 
        let w2 = people[r];

        //  smaller weight + larger weight, below than limit of weight
        if((w1 + w2) <= limit)
            l++;
        
        r--;
        boats++;
    }
    
    return boats;
};
