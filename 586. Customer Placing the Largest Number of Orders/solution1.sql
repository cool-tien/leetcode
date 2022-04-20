/*
    https://leetcode.com/submissions/detail/683879682/
    Runtime: 716 ms, faster than 97.15% of MS SQL Server online submissions for Customer Placing the Largest Number of Orders.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customer Placing the Largest Number of Orders.
*/
/* Write your T-SQL query statement below */

with
order_total as (
    select top 1
        [customer_number], count([customer_number]) as [total]
    from Orders
    group by [customer_number]
    order by 2 desc
)
select [customer_number] from order_total
