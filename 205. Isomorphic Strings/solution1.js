/**
    [Ugly Solution]

    Time Complexity: O(n²)
        81 ~ 84 ms          (13.41% ~ 14.44%)
    Space Complexity: O(n)
        53.22 ~ 54.00 MB    (7.75% ~ 9.51%)

    https://leetcode.com/problems/isomorphic-strings/submissions/1182577050/
        Runtime 81 ms Beats 14.44%; Memory 54.00 MB Beats 7.75%; 
    https://leetcode.com/problems/isomorphic-strings/submissions/1182583157/
        Runtime 84 ms Beats 13.41%; Memory 53.22 MB Beats 9.51%; 
    https://leetcode.com/problems/isomorphic-strings/submissions/1182584142/
        Runtime 82 ms Beats 13.96%; Memory 53.22 MB Beats 9.51%; 

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    //  record character appear index of position
    let map_s = new Map();
    let map_t = new Map();
    let arr = [];
    
    //  Build Map
    for(let i=0; i<s.length; i++){
        arr = (map_s.get(s[i]) || []);
        arr.push(i);
        map_s.set(s[i], arr);

        arr = (map_t.get(t[i]) || []);
        arr.push(i);
        map_t.set(t[i], arr);
    }

    for(let i=0; i<s.length; i++){
        let arr_s = map_s.get(s[i]);
        let arr_t = map_t.get(t[i]);

        if(arr_s.length !== arr_t.length)
            return false;
        
        for(let j=0; j<arr_s.length; j++)
            if(arr_s[j] !== arr_t[j])
                return false;
    }
    
    return true;
};