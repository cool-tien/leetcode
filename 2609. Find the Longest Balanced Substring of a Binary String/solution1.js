/**
    Question:
        https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/description/    

    Time Complexity: O(n) 
        82 ~ 107 ms     (?)
    Space Complexity: O(1) 
        46.9 ~ 47.1 MB  (?)

    https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/submissions/926919540/
        Runtime 88 ms, Beats ?; Memory 46.9 MB, Beats ? 
    https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/submissions/926924347/
        Runtime 107 ms, Beats ?; Memory 47.1 MB, Beats ? 
    https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/submissions/926924538/
        Runtime 82 ms, Beats ?; Memory 46.9 MB, Beats ? 

 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    //  start from potential longest
    let repeat_num = parseInt(s.length / 2);
    
    while(repeat_num){
        let balanced = "0".repeat(repeat_num) + "1".repeat(repeat_num);
        
        if(s.includes(balanced))
            return balanced.length;
        repeat_num--;
    }
    
    return 0;
};