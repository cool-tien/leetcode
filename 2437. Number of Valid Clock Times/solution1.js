/**
    O(n)
    85~119 ms 
    41.6~42.4 MB 
    
    2022-10-16 10:34 (UTC+8)
    *** Sorry. We do not have enough accepted submissions to show distribution chart. ***

    https://leetcode.com/submissions/detail/823365055/
        Runtime: 85 ms, faster than ?% of JavaScript online submissions for Number of Valid Clock Times.
        Memory Usage: 42.4 MB, less than ?% of JavaScript online submissions for Number of Valid Clock Times.
    https://leetcode.com/submissions/detail/823374114/
        Runtime: 119 ms, faster than ?% of JavaScript online submissions for Number of Valid Clock Times.
        Memory Usage: 41.6 MB, less than ?% of JavaScript online submissions for Number of Valid Clock Times.
    https://leetcode.com/submissions/detail/823375561/
        Runtime: 109 ms, faster than 100.00% of JavaScript online submissions for Number of Valid Clock Times.
        Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Number of Valid Clock Times.

 * @param {string} time
 * @return {number}
 */
 var countTime = function(time) {
    let arr = time.split(":").join("");
    let base = [2, 10, 6, 10];
    let valid = 1;
    let i = 0;
    
    //  reset base, when "??:xx" | "?0~3:xx" | "2?:xx"
    if(arr[0] === '?'){
        if(arr[1] === '?'){
            valid = 24;
            i = 2;
        }
        else if(+arr[1] <= 3)
            base[0] = 3;
    }
    else if( (arr[1] === '?') && (+arr[0] === 2) )
        base[1] = 4;
    
    while(i < base.length){
        if(arr[i] === '?')
            valid *= base[i];
        i++;
    }
    
    return valid;
};