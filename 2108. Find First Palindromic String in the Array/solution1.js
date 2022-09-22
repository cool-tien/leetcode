/**
    O(n)
    115~139 ms   (50.24%~70.85%)
    46.3~46.5 MB (90.66%~94.85%)

    https://leetcode.com/submissions/detail/805818037/#/
        Runtime: 139 ms, faster than 50.24% of JavaScript online submissions for Find First Palindromic String in the Array.
        Memory Usage: 46.5 MB, less than 90.66% of JavaScript online submissions for Find First Palindromic String in the Array.
    https://leetcode.com/submissions/detail/805839908/#/
        Runtime: 115 ms, faster than 70.85% of JavaScript online submissions for Find First Palindromic String in the Array.
        Memory Usage: 46.3 MB, less than 94.85% of JavaScript online submissions for Find First Palindromic String in the Array.
    https://leetcode.com/submissions/detail/805840029/#/
        Runtime: 130 ms, faster than 58.29% of JavaScript online submissions for Find First Palindromic String in the Array.
        Memory Usage: 46.4 MB, less than 90.66% of JavaScript online submissions for Find First Palindromic String in the Array.


 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    const isPalindrome = str => {
        let left = 0;
        let right = str.length - 1;
        
        while(left < right){
            if(str[left] !== str[right])
                return false;
            
            left++;
            right--;
        }
        
        return true;
    }
    
    for(let word of words)
        if(isPalindrome(word))
            return word;
    return "";
};