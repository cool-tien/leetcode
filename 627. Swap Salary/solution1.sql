/*
    467 ~ 528 ms    (67.29% ~ 98.77%)

    https://leetcode.com/submissions/detail/847747192/
        Runtime: 467 ms, faster than 98.77% of MS SQL Server online submissions for Swap Salary.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Swap Salary.
    https://leetcode.com/submissions/detail/847749822/
        Runtime: 528 ms, faster than 67.29% of MS SQL Server online submissions for Swap Salary.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Swap Salary.
    https://leetcode.com/submissions/detail/847749903/
        Runtime: 518 ms, faster than 74.30% of MS SQL Server online submissions for Swap Salary.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Swap Salary.

*/
/* Write your T-SQL query statement below */

update Salary
set [sex] = 
    case 
        when [sex] = 'm' then 'f'
        else 'm'
    end