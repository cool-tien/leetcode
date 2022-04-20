/*
    https://leetcode.com/submissions/detail/683854690/
    Runtime: 2655 ms, faster than 59.97% of MS SQL Server online submissions for Game Play Analysis I.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Game Play Analysis I.
*/
/* Write your T-SQL query statement below */

select
    main.[player_id], 
    (
        select top 1
            [event_date]
        from Activity as sub
        where sub.[player_id] = main.[player_id]
        order by [event_date]
    ) as [first_login]
from Activity as main
group by main.[player_id]