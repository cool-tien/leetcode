/*
    https://leetcode.com/submissions/detail/688017979/
    Runtime: 2203 ms, faster than 79.22% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
*/
/* Write your T-SQL query statement below */

select
    [customer_id], count([customer_id]) as [count_no_trans]
from Visits 
where [visit_id] not in (
    select [visit_id] from Transactions 
    group by [visit_id] 
)
group by [customer_id]
