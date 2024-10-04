/**
    Time Complexity: O(n)
    Spacce Complexity: O(m)

    https://leetcode.com/problems/report-spam-message/submissions/1411057644/

 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords){
    let set = new Set(bannedWords);
    let match = 0;

    for(const word of message){
        if(set.has(word))
            match++;
        if(match >= 2)
            return true;
    }
    
    return false;
};