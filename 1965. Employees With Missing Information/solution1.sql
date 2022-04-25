/*
    https://leetcode.com/submissions/detail/687144613/
    Runtime: 500 ms, faster than 99.66% of MS SQL Server online submissions for Employees With Missing Information.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Employees With Missing Information.
*/
/* Write your T-SQL query statement below */

with
Missing_Employees as (
    select
        [employee_id]
    from Employees
    where [employee_id] not in (
        select [employee_id] from Salaries
    )
),
Missing_Salaries as (
    select
        [employee_id]
    from Salaries
    where [employee_id] not in (
        select [employee_id] from Employees
    )
)

select [employee_id] from Missing_Employees
union
select [employee_id] from Missing_Salaries
order by 1
