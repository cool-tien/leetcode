/*
    Time Complexity: 
        1203 ~ 1593 ms  (30.90% ~ 79.40%)
    
    https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/submissions/984965062/
        Runtime 1203 ms, Beats 79.40%; 
    https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/submissions/984974979/
        Runtime 1593 ms, Beats 30.90%; 
    https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/submissions/984975223/
        Runtime 1560 ms, Beats 33.75%; 

*/
/* Write your T-SQL query statement below */
with 
Report as (
    select
        [reports_to], count([reports_to]) as [reports_count], 
        round(
            cast(sum([age]) as float) / cast(count([reports_to]) as float)
        , 0) as [average_age]
    from Employees 
    group by [reports_to]
)

select 
    e.[employee_id], e.[name], 
    r.[reports_count], r.[average_age]
from Employees e
inner join Report r on r.[reports_to] = e.[employee_id]