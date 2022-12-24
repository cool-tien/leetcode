/**
    O(n)
    94 ~ 107 ms     (23.58% ~ 53.66%)
    41.8 ~ 42.3 MB  (23.58% ~ 87.80%)

    https://leetcode.com/problems/distribute-candies-to-people/submissions/861865002/
        Runtime 107 ms, Beats 23.58%; Memory 42.3 MB, Beats 23.58%
    https://leetcode.com/problems/distribute-candies-to-people/submissions/861866011/
        Runtime 94 ms, Beats 53.66%; Memory 41.8 MB, Beats 87.80%
    https://leetcode.com/problems/distribute-candies-to-people/submissions/861866156/
        Runtime 104 ms, Beats 29.27%; Memory 41.9 MB, Beats 78.86%

 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people).fill(0);
    let n = 0;
    
    while(candies){
        for(let i=0; i<num_people; i++){
            //  number of distribute 
            let num = n * num_people + i + 1;
            
            //  candies left less than distribute
            if(num > candies)
                num = candies;

            candies -= num;
            arr[i] += num;

            //  not more candies can distribute
            if(!candies)
                break;
        }

        n++;
    }

    return arr;
};