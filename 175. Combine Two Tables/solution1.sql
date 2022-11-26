/*
    811 ~ 826 ms    (68.72% ~ 73.89%)

    https://leetcode.com/submissions/detail/849387143/
        Runtime: 811 ms, faster than 73.89% of MS SQL Server online submissions for Combine Two Tables.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Combine Two Tables.
    https://leetcode.com/submissions/detail/849391009/
        Runtime: 815 ms, faster than 72.48% of MS SQL Server online submissions for Combine Two Tables.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Combine Two Tables.
    https://leetcode.com/submissions/detail/849391065/
        Runtime: 826 ms, faster than 68.72% of MS SQL Server online submissions for Combine Two Tables.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Combine Two Tables.
*/
/* Write your T-SQL query statement below */
select 
    p.[firstName], p.[lastName], a.[city], a.[state]
from Person p
left join Address a on a.[personId] = p.[personId]