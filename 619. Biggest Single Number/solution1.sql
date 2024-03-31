/*
    701 ~ 753ms     (67.94% ~ 78.08%)
    
    [Refer to GPT solution with "max"]
    https://leetcode.com/problems/biggest-single-number/submissions/1218678093/
        Runtime 701 ms Beats 78.08%; 
    https://leetcode.com/problems/biggest-single-number/submissions/1218875998/
        Runtime 703 ms Beats 77.95%; 
    https://leetcode.com/problems/biggest-single-number/submissions/1218880275/
        Runtime 753 ms Beats 67.94%; 
*/
/* Write your T-SQL query statement below */

with
Biggest as (
    select 
        [num]
    from MyNumbers 
    group by [num]
    having count([num]) = 1
)
select 
    max([num]) as [num]
from Biggest