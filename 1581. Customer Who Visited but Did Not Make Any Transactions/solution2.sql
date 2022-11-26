/*
    2286 ~ 2558 ms  (70.89% ~ 92.09%)

    https://leetcode.com/submissions/detail/849385886/
        Runtime: 2475 ms, faster than 76.64% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
    https://leetcode.com/submissions/detail/849391726/
        Runtime: 2558 ms, faster than 70.89% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
    https://leetcode.com/submissions/detail/849391795/
        Runtime: 2286 ms, faster than 92.09% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customer Who Visited but Did Not Make Any Transactions.
*/
/* Write your T-SQL query statement below */
select 
    [customer_id], count([customer_id]) as [count_no_trans]
from Visits v
where not exists (
    select t.[visit_id] from Transactions t 
    where t.[visit_id] = v.[visit_id]
)
group by [customer_id]