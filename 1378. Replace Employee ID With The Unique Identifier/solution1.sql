/*
    Time Complexity: 
        1861 ~ 3053 ms  (7.52% ~ 78.52%)
    
    https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/submissions/985355673/
        Runtime 2370 ms, Beats 28.40%; 
    https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/submissions/986147103/
        Runtime 3053 ms, Beats  7.52%; 
    https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/submissions/986147506/
        Runtime 1861 ms, Beats 78.52%; 

*/
/* Write your T-SQL query statement below */
select 
    u.[unique_id], e.[name]
from Employees e
left join EmployeeUNI u on u.[id] = e.[id]