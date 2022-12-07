/**
    O(n)
    98 ~ 191 ms     (64.11% ~ 99.40%)
    53.4 ~ 54.2 MB  (20.57% ~ 25.36%)

    https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/submissions/855855140/
        Runtime 191 ms, Beats 64.11%; Memory 54.2 MB, Beats 20.57%
    https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/submissions/855856368/
        Runtime 98 ms, Beats 99.4%; Memory 53.6 MB, Beats 23.44%
    https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/submissions/855858234/
        Runtime 185 ms, Beats 65.7%; Memory 53.4 MB, Beats 25.36%

 * @param {number[]} skill
 * @return {number}
 */
 var dividePlayers = function(skill) {
    let map = new Map();
    let total = 0;
    let sum = 0;
    
    for(let num of skill){
        map.set(num, (map.get(num) || 0) + 1);
        total += num;
    }
    
    let avg_skill = total / (skill.length / 2);
    //  can't divide to each same value
    if(total % avg_skill !== 0)
        return -1;

    let keys = [...map.keys()];
    while(keys.length){
        let key = keys.pop();
        //  other pair key value
        let pair = avg_skill - key;
        let key_appear = map.get(key);
        let pair_appear = (map.get(pair) || 0);

        if(key === pair){
            if(key_appear % 2 !== 0)
                return -1;
            sum += key * key * (key_appear / 2);
        }
        else if(map.has(pair) && key_appear === pair_appear){
            let idx = keys.indexOf(pair);
            
            keys.splice(idx, 1);
            sum += (key * pair) * key_appear;
        }
        else
            return -1;
    }

    return sum;
};