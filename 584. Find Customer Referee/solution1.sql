/*
    https://leetcode.com/submissions/detail/683859882/
    Runtime: 794 ms, faster than 90.95% of MS SQL Server online submissions for Find Customer Referee.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Find Customer Referee.
*/
/* Write your T-SQL query statement below */

select
    [name]
from Customer
where [referee_id] is null or [referee_id] != 2