/**
    Time complexity:  O(2n)
    Space complexity: O(n)

    https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/870824742/
        Runtime 198 ms, Beats 80.39%; Memory 63.3 MB, Beats 47.60%
    https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/870826208/
        Runtime 202 ms, Beats 78.43%; Memory 59.1 MB, Beats 68.63%
    https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/870826402/
        Runtime 193 ms, Beats 78.43%; Memory 59.4 MB, Beats 68.63%

 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = new Map();
    let min = 0;

    //  build hash map
    for(let task of tasks)
        map.set(task, (map.get(task) || 0) + 1);

    let appears = [...map.values()];

    //  calculate min round of a number
    for(let appear of appears){
        //  return -1, if just appaer 1 time
        if(appear === 1) return -1;

        let remain = (appear % 3) !== 0;
    
        (appear === 2 || appear === 3)?
            min += 1:
            min += (~~(appear / 3) + remain);
    }
    
    return min;
};