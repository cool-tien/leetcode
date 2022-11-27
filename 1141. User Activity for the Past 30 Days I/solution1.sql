/*
    1642 ~ 1875 ms  (78.42% ~ 97.67%)

    https://leetcode.com/submissions/detail/850479342/
        Runtime: 1708 ms, faster than 91.98% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
    https://leetcode.com/submissions/detail/850479607/
        Runtime: 1875 ms, faster than 78.42% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
    https://leetcode.com/submissions/detail/850479686/
        Runtime: 1642 ms, faster than 97.67% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
*/
/* Write your T-SQL query statement below */

with
day_of_activity as (
    select 
        [activity_date] as [day], [user_id]
    from Activity 
    where [activity_date] >= '2019-06-28' and [activity_date] <= '2019-07-27'
    group by [activity_date], [user_id]
)

select 
    [day], count([day]) as [active_users]
from day_of_activity
group by [day]
