/*
    https://leetcode.com/submissions/detail/688044347/
    Runtime: 3133 ms, faster than 38.35% of MS SQL Server online submissions for Market Analysis I.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Market Analysis I.
*/
/* Write your T-SQL query statement below */

with
Paid_List as (
    select
        u.[user_id] as [buyer_id], u.[join_date], 
        count(o.[buyer_id]) as [orders_in_2019]
    from Users u
    left join Orders o on o.[buyer_id] = u.[user_id]
    where year(o.[order_date]) = '2019'
    group by u.[user_id], u.[join_date]
)

select * from Paid_List
union all
select 
    [user_id], [join_date], 0
from Users
where [user_id] not in (
    select [buyer_id] from Paid_List
)