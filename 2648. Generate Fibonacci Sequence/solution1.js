/**
    [base on refer Bing about what is generator function]

    Time Complexity: O(1)
        46 ~ 63 ms      (26.48% ~ 97.33%)
    Space Complexity: O(1)
        42.0 ~ 42.3 MB  (32.95% ~ 63.24%)
    
    https://leetcode.com/problems/generate-fibonacci-sequence/submissions/939430438/
        Runtime 46 ms, Beats 97.33%; Memory 42.3 MB, Beats 32.95%; 
    https://leetcode.com/problems/generate-fibonacci-sequence/submissions/939430506/
        Runtime 63 ms, Beats 26.48%; Memory 42.1 MB, Beats 47.24%; 
    https://leetcode.com/problems/generate-fibonacci-sequence/submissions/939430615/
        Runtime 62 ms, Beats 31.24%; Memory 42.0 MB, Beats 63.24%; 

 * @return {Generator<number>}
 */
var fibGenerator = function*(n = 0) {
    let current = 0;
    let next = 1;

    while(true){
      yield current;
      [current, next] = [next, current + next];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */