/*
    Time Complexity: 
        781 ~ 1117 ms   (16.17% ~ 65.27%)
    
    https://leetcode.com/problems/primary-department-for-each-employee/submissions/984959435/
        Runtime 1010 ms, Beats 26.35%; 
    https://leetcode.com/problems/primary-department-for-each-employee/submissions/984971937/
        Runtime 1117 ms, Beats 16.17%; 
    https://leetcode.com/problems/primary-department-for-each-employee/submissions/984972059/
        Runtime  781 ms, Beats 65.27%;

*/
/* Write your T-SQL query statement below */
with 
Primary_Department as (
    select distinct 
        [employee_id], [department_id]
    from Employee 
    where [primary_flag] = 'Y'
)

select * from Primary_Department
union all
select
    [employee_id], [department_id]
from Employee
where [employee_id] not in (
    select [employee_id] from Primary_Department
)
