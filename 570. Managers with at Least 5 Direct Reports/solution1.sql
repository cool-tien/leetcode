/*
    1303 ~ 1676 ms  (36.49% ~ 80.38%)
    
    [Time taken: 7m 10s]
    https://leetcode.com/problems/managers-with-at-least-5-direct-reports/submissions/1217817354/
        Runtime 1303 ms Beats 80.38%; 
    https://leetcode.com/problems/managers-with-at-least-5-direct-reports/submissions/1217821705/
        Runtime 1546 ms Beats 49.03%; 
    https://leetcode.com/problems/managers-with-at-least-5-direct-reports/submissions/1217822294/
        Runtime 1676 ms Beats 36.49%; 

*/
/* Write your T-SQL query statement below */

with 
Direct as (
    select 
        [managerId] as [id], 
        count([managerId]) as [report_numbers]
    from Employee
    group by [managerId]
)

select Employee.[name] from Employee
inner join Direct on Direct.[id] = Employee.[id]
where Direct.[report_numbers] >= 5