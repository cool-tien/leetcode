/*
    https://leetcode.com/submissions/detail/687736745/
    Runtime: 1929 ms, faster than 58.56% of MS SQL Server online submissions for Fix Names in a Table.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Fix Names in a Table.
*/
/* Write your T-SQL query statement below */

select 
    [user_id], 
    substring(upper([name]), 1, 1) + substring(lower([name]), 2, len([name]) - 1) as [name]
from Users 
order by 1
