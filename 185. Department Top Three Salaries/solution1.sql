/*
    866 ~ 904 ms    (55.69% ~ 70.49%)

    https://leetcode.com/submissions/detail/849397342/
        Runtime: 904 ms, faster than 55.69% of MS SQL Server online submissions for Department Top Three Salaries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Department Top Three Salaries.
    https://leetcode.com/submissions/detail/849397847/
        Runtime: 890 ms, faster than 60.99% of MS SQL Server online submissions for Department Top Three Salaries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Department Top Three Salaries.
    https://leetcode.com/submissions/detail/849397913/
        Runtime: 866 ms, faster than 70.49% of MS SQL Server online submissions for Department Top Three Salaries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Department Top Three Salaries.
*/
/* Write your T-SQL query statement below */
select 
    d.[name] as [Department], e.[name] as [Employee], e.[salary] as [Salary]
from Employee e
inner join Department d on d.[id] = e.[departmentId]
where [salary] in (
    select distinct top 3
        sub.[salary]
    from Employee sub
    where sub.[departmentId] = e.[departmentId]
    order by sub.[salary] desc
)