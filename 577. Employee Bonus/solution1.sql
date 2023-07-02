/*
    Time Complexity: 
        1080 ~ 1252 ms  (48.73% ~ 76.25%)
    
    https://leetcode.com/problems/employee-bonus/submissions/984504670/
        Runtime 1252 ms, Beats 48.73%; 
    https://leetcode.com/problems/employee-bonus/submissions/984635202/
        Runtime 1080 ms, Beats 76.25%; 
    https://leetcode.com/problems/employee-bonus/submissions/984635488/
        Runtime 1189 ms, Beats 59.80%;

*/
/* Write your T-SQL query statement below */
select 
    e.[name], b.[bonus] 
from Employee e 
left join Bonus b on b.[empId] = e.[empId]
where b.[bonus] is null or b.[bonus] < 1000