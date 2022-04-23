/*
    https://leetcode.com/submissions/detail/686080943/
    Runtime: 633 ms, faster than 87.23% of MS SQL Server online submissions for Rank Scores.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rank Scores.
*/
/* Write your T-SQL query statement below */

with
Rank as (
    select
        [score], row_number() over(order by [score] desc) as [rank]
    from Scores
    group by [score]
)

select
    Scores.[score], Rank.[rank]
from Scores
inner join Rank on Rank.[score] = Scores.[score]
order by Scores.[score] desc