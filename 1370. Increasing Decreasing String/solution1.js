/**
    Time Complexity: O(n²)
        114 ~ 131 ms    (17.65% ~ 24.71%)
    Space Complexity: O(n)
        49.6 ~ 50.1 MB  (10.59% ~ 15.27%)

    https://leetcode.com/problems/increasing-decreasing-string/submissions/943549181/
        Runtime 131 ms, Beats 17.65%; Memory 49.7 MB, Beats 14.12%; 
    https://leetcode.com/problems/increasing-decreasing-string/submissions/943549447/
        Runtime 114 ms, Beats 24.71%; Memory 50.1 MB, Beats 10.59%; 
    https://leetcode.com/problems/increasing-decreasing-string/submissions/943549482/
        Runtime 123 ms, Beats 21.18%; Memory 49.6 MB, Beats 15.29%; 

 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let map = new Map();
    let output = "";

    //  count character appear time and convert to array for sorting
    for(let c of s)
        map.set(c, (map.get(c) || 0) + 1);
    
    let is_increase = true;
    while(output.length !== s.length){
        //  build Set
        let set = new Set();
        for(let [c, v] of [...map])
            set.add(c);

        while(set.size){
            let ch = (is_increase)?
                String.fromCharCode(Math.min(...[...set].map(c => c.charCodeAt()))):
                String.fromCharCode(Math.max(...[...set].map(c => c.charCodeAt())));

            output += ch;
            set.delete(ch);
            map.set(ch, map.get(ch) - 1);

            if(map.get(ch) === 0)
                map.delete(ch);
        }

        //  change orientation
        is_increase = !is_increase;
    }
    
    return output;
};