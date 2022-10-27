/**
    O(n)
    63~150 ms    (23.32%~99.90%)
    45.5~46.2 MB (86.29%~95.40%)

    https://leetcode.com/submissions/detail/831101976/
        Runtime: 63 ms, faster than 99.90% of JavaScript online submissions for Unique Email Addresses.
        Memory Usage: 45.5 MB, less than 95.40% of JavaScript online submissions for Unique Email Addresses.
    https://leetcode.com/submissions/detail/831106983/
        Runtime: 150 ms, faster than 23.32% of JavaScript online submissions for Unique Email Addresses.
        Memory Usage: 46.2 MB, less than 86.29% of JavaScript online submissions for Unique Email Addresses.
    https://leetcode.com/submissions/detail/831107065/
        Runtime: 71 ms, faster than 98.90% of JavaScript online submissions for Unique Email Addresses.
        Memory Usage: 45.7 MB, less than 93.89% of JavaScript online submissions for Unique Email Addresses.

 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    emails = emails.map(s => {
        let [name, domain] = s.split('@');
        let idx = name.indexOf('+');
        let end = (idx === -1)? name.length: idx;
        
        return name.substring(0, end).replace(/[.]/g, '') + '@' + domain;
    });
    
    return new Set(emails).size;
};