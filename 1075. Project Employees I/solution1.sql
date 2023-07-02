/*
    Time Complexity: 
        3522 ~ 4079 ms  (27.26% ~ 83.23%)
    
    https://leetcode.com/problems/project-employees-i/submissions/984520508/
        Runtime 4385 ms, Beats 27.26%; 
    https://leetcode.com/problems/project-employees-i/submissions/984637960/
        Runtime 3522 ms, Beats 83.23%; 
    https://leetcode.com/problems/project-employees-i/submissions/984638688/
        Runtime 4079 ms, Beats 43.10%; 

*/
/* Write your T-SQL query statement below */
select
    p.[project_id], 
    round(
        cast(sum(e.[experience_years]) as decimal(10, 2)) / cast(count(p.[project_id]) as decimal(10, 2))
    , 2) as [average_years]
from Project p
inner join Employee e on e.[employee_id] = p.[employee_id]
group by [project_id]