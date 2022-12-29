/**
    Time Complexity: O(n² log n)
    Space Complexity: O(2n)

    https://leetcode.com/problems/remove-stones-to-minimize-the-total/submissions/867220000/
        Runtime 1685 ms, Beats 46.15%; Memory 69.0 MB, Beats 38.46%
    https://leetcode.com/problems/remove-stones-to-minimize-the-total/submissions/867222780/
        Runtime 1604 ms, Beats 46.15%; Memory 68.5 MB, Beats 38.46%
    https://leetcode.com/problems/remove-stones-to-minimize-the-total/submissions/867222961/
        Runtime 1599 ms, Beats 46.15%; Memory 68.9 MB, Beats 38.46%

 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let set = new Set();
    let map = new Map();

    for(let pile of piles){
        set.add(pile);
        map.set(pile, (map.get(pile) || 0) + 1);
    }
    
    //  convert back to 2d array and sorting
    let arr = [...set].sort((a, b) => a - b);

    while(k){
        let pile = arr.pop();
        let appear = map.get(pile);
        let num = (pile % 2 === 1)? 
            ~~(pile / 2) + 1:
            (pile / 2);
        
        //  reset value if appear > k
        appear = Math.min(appear, k);
        
        map.has(num)?
            map.set(num, map.get(num) + appear):
            map.set(num, appear);
        
        //  can remove the pile (used all appear time)
        if(appear === map.get(pile))
            map.delete(pile);
        else
            map.set(pile, map.get(pile) - appear);
        k -= appear;

        //  re-put into arr (set) and sorting
        if(!arr.includes(num)){
            arr.push(num);

            if(num < arr[arr.length - 2])
                arr.sort((a, b) => a - b);
        }
    }

    return [...map].reduce((acc, pile) => acc + (pile[0] * pile[1]), 0);
}