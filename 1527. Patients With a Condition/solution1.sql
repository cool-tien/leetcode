/*
    https://leetcode.com/submissions/detail/688009466/
    Runtime: 417 ms, faster than 91.25% of MS SQL Server online submissions for Patients With a Condition.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Patients With a Condition.
*/
/* Write your T-SQL query statement below */

select * from Patients 
where [conditions] like 'DIAB1%' or [conditions] like '%[ ]DIAB1%'
