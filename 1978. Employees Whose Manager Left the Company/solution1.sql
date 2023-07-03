/*
    Time Complexity: 
        654 ~ 890 ms    (29.32% ~ 73.70%)
    
    https://leetcode.com/problems/employees-whose-manager-left-the-company/submissions/984952807/
        Runtime 841 ms, Beats 34.93%; 
    https://leetcode.com/problems/employees-whose-manager-left-the-company/submissions/984969827/
        Runtime 654 ms, Beats 73.70%; 
    https://leetcode.com/problems/employees-whose-manager-left-the-company/submissions/984970962/
        Runtime 890 ms, Beats 29.32%; 

*/
/* Write your T-SQL query statement below */
select
    [employee_id]
from Employees 
where 
    [salary] < 30000 and
    [manager_id] not in (
        select [employee_id] from Employees
    )
order by [employee_id]