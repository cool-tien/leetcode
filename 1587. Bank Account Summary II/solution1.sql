/*
    https://leetcode.com/submissions/detail/687741514/
    Runtime: 585 ms, faster than 76.81% of MS SQL Server online submissions for Bank Account Summary II.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Bank Account Summary II.
*/
/* Write your T-SQL query statement below */

with
Balance as (
    select
        [account], sum([amount]) as [balance]
    from Transactions 
    group by [account]
)

select
    Users.[name], Balance.[balance]
from Balance
inner join Users on Users.[account] = Balance.[account]
where Balance.[balance] > 10000