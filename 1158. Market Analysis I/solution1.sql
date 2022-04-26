/*
    https://leetcode.com/submissions/detail/688031335/
    Runtime: 3285 ms, faster than 30.83% of MS SQL Server online submissions for Market Analysis I.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Market Analysis I.
*/
/* Write your T-SQL query statement below */

with
Order_2019 as (
    select
        [buyer_id], count([buyer_id]) as [orders_in_2019]
    from Orders
    where year([order_date]) = '2019'
    group by [buyer_id]
)

select
    Users.[user_id] as [buyer_id], Users.[join_date], 
    isnull(Order_2019.[orders_in_2019], 0) as [orders_in_2019]
from Users
left join Order_2019 on Order_2019.[buyer_id] = Users.[user_id]
