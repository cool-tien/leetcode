/* Write your T-SQL query statement below */

with 
latest_id as (
    select
        [user_id]
    from Logins 
    where [time_stamp] >= '2020-01-01 00:00:00' and [time_stamp] <= '2020-12-31 23:59:59'
    group by [user_id]
)


select
    [user_id], 
    (
        select top 1
            [time_stamp] 
        from Logins
        where 
            [user_id] = latest_id.[user_id] and
            [time_stamp] >= '2020-01-01 00:00:00' and [time_stamp] <= '2020-12-31 23:59:59'
        order by [time_stamp] desc
    ) as [last_stamp]
from latest_id 
