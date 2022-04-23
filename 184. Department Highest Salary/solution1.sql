/*
    https://leetcode.com/submissions/detail/686105947/
    Runtime: 682 ms, faster than 91.71% of MS SQL Server online submissions for Department Highest Salary.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Department Highest Salary.
*/
/* Write your T-SQL query statement below */

with
Highest_Salary as (
    select
        [departmentId], max([salary]) as [salary]
    from Employee
    group by [departmentId]
)
select
    d.[name] as [Department], e.[name] as [Employee], hs.[salary] as [Salary]
from Employee e
inner join Department d on e.[departmentId] = d.[id]
inner join Highest_Salary hs on hs.[departmentId] = d.[id]
where e.[departmentId] = hs.[departmentId] and e.[salary] = hs.[salary]