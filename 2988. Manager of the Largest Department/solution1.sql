/*
  https://leetcode.com/problems/manager-of-the-largest-department/submissions/1625917282/
*/
with 
DepartmentList as (
  select 
    [dep_id], count([dep_id]) as [total_employee], 
    rank() over(order by count([dep_id]) desc) as [rank] 
  from Employees 
  group by [dep_id] 
)

select 
  e.[emp_name] as [manager_name], e.[dep_id] 
from Employees e 
inner join DepartmentList d on d.[dep_id] = e.[dep_id] 
where 
  e.[position] = 'Manager' and 
  d.[rank] = 1
order by e.[dep_id] 