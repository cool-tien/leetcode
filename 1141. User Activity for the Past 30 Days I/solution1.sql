/*
    Runtime: 1494~1715 ms, faster than 79.06%~95.73%

    https://leetcode.com/submissions/detail/755747578/
    Runtime: 1494 ms, faster than 95.73% of MS SQL Server online submissions for User Activity for the Past 30 Days I.
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
