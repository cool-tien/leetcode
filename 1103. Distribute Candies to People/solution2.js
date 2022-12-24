/**
    O(n)
    53 ~ 78 ms      (76.42% ~ 98.37%)
    41.9 ~ 42.3 MB  (13.82% ~ 60.98%)

    https://leetcode.com/problems/distribute-candies-to-people/submissions/861867031/
        Runtime 75 ms, Beats 84.55%; Memory 41.9 MB, Beats 60.98%
    https://leetcode.com/problems/distribute-candies-to-people/submissions/861867645/
        Runtime 53 ms, Beats 98.37%; Memory 42.0 MB, Beats 60.98%
    https://leetcode.com/problems/distribute-candies-to-people/submissions/861867865/
        Runtime 78 ms, Beats 76.42%; Memory 42.3 MB, Beats 13.82%

 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people).fill(0);
    let n = 0;
    
    while(candies){
        //  the base of distribute after n round
        let base = n * num_people;

        for(let i=0; i<num_people; i++){
            //  number of distribute 
            let num = base + i + 1;
            
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