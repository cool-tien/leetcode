/*
    https://leetcode.com/submissions/detail/685191300/
    Runtime: 970 ms, faster than 96.63% of MS SQL Server online submissions for Find Followers Count.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Find Followers Count.
*/
/* Write your T-SQL query statement below */

select
    [user_id], count([user_id]) as [followers_count]
from Followers
group by [user_id]