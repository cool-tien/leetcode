/*
  https://leetcode.com/problems/unique-orders-and-customers-per-month/submissions/1758854779/
    Runtime 682 ms Beats 100.00%
*/
/* Write your T-SQL query statement below */
with
CTE as (
  select
    *, datename(year, [order_date]) + '-' + right('0' + cast(month([order_date]) as varchar), 2) as [month]
  from Orders 
)

select 
  [month], count([order_id]) as [order_count], 
  count(distinct [customer_id]) as [customer_count] 
from CTE
where [invoice] > 20
group by [month]