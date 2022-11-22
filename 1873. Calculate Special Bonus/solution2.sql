/*
    1095 ~ 1371 ms  (51.14% ~ 94.19%)

    https://leetcode.com/submissions/detail/847752285/
        Runtime: 1140 ms, faster than 88.67% of MS SQL Server online submissions for Calculate Special Bonus.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Calculate Special Bonus.
    https://leetcode.com/submissions/detail/847769481/
        Runtime: 1371 ms, faster than 51.14% of MS SQL Server online submissions for Calculate Special Bonus.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Calculate Special Bonus.
    https://leetcode.com/submissions/detail/847769570/
        Runtime: 1095 ms, faster than 94.19% of MS SQL Server online submissions for Calculate Special Bonus.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Calculate Special Bonus.

*/
/* Write your T-SQL query statement below */

select 
    [employee_id], 
    iif(([employee_id] % 2 = 0 or substring([name], 1, 1) = 'M'), 0, [salary]) as [bonus]
from Employees
order by [employee_id]
