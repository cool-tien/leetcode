/*
    646 ~ 812 ms    (40.73% ~ 90.32%)
    
    https://leetcode.com/submissions/detail/848868889/
        Runtime: 655 ms, faster than 85.30% of MS SQL Server online submissions for Employees With Missing Information.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Employees With Missing Information.
    https://leetcode.com/submissions/detail/848869380/
        Runtime: 646 ms, faster than 90.32% of MS SQL Server online submissions for Employees With Missing Information.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Employees With Missing Information.
    https://leetcode.com/submissions/detail/848869497/
        Runtime: 812 ms, faster than 40.73% of MS SQL Server online submissions for Employees With Missing Information.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Employees With Missing Information.
*/
/* Write your T-SQL query statement below */

with
missing_list as (
    select [employee_id] from Employees employee
    where not exists (
        select salary.[employee_id] from Salaries salary
        where salary.[employee_id] = employee.[employee_id]
    )
    union all
    select [employee_id] from Salaries salary
    where not exists (
        select employee.[employee_id] from Employees employee
        where employee.[employee_id] = salary.[employee_id]
    )
)
select * from missing_list
order by [employee_id]