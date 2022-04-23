/*
    https://leetcode.com/submissions/detail/685897906/
    Runtime: 1159 ms, faster than 76.36% of MS SQL Server online submissions for Top Travellers.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Top Travellers.
*/
/* Write your T-SQL query statement below */

with
Distance as (
    select
        [user_id], sum([distance]) as [total]
    from Rides 
    group by [user_id]
)

select
    Users.[name], isnull(Distance.[total], 0) as [travelled_distance]
from Users 
left join Distance on Distance.[user_id] = Users.[id]
order by Distance.[total] desc, Users.[name] asc
