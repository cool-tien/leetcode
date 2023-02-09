/**
    Time Complexity: O(nm)
        880 ~ 929 ms        (14.28% ~ 16.54%)
    Space Complexity: 
        53.4 ~ 53.5 MB      (6.77% ~ 7.52%)

    https://leetcode.com/problems/fair-candy-swap/description/
        Runtime 880 ms, Beats 16.54%; Memory 53.5 MB, Beats 6.77%
    https://leetcode.com/problems/fair-candy-swap/submissions/894400539/
        Runtime 899 ms, Beats 15.79%; Memory 53.5 MB, Beats 6.77%
    https://leetcode.com/problems/fair-candy-swap/submissions/894400694/
        Runtime 929 ms, Beats 14.28%; Memory 53.4 MB, Beats 7.52%

 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let alice_set = new Set();
    let bob_set = new Set();
    let alice_total = 0;
    let bob_total = 0;
    
    //  count total and build set
    for(let candy of aliceSizes){
        alice_total += candy;
        alice_set.add(candy);
    }
    for(let candy of bobSizes){
        bob_total += candy;
        bob_set.add(candy);
    }

    //  convert set to array for looping
    let bob_arr = [...bob_set];
    for(let alice_candy of [...alice_set])
        for(let bob_candy of bob_arr){
            let is_both_same = (alice_total - alice_candy + bob_candy) === (bob_total - bob_candy + alice_candy);

            if(is_both_same)
                return [alice_candy, bob_candy];
        }
};