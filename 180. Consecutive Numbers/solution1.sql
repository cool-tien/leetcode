/*
    1176 ~ 1347 ms  (42.32% ~ 63.89%)
    
    https://leetcode.com/problems/consecutive-numbers/submissions/1220936366/
        Runtime 1176 ms Beats 63.89% of users with MS SQL Server; 
    https://leetcode.com/problems/consecutive-numbers/submissions/1221264215/
        Runtime 1347 ms Beats 42.32% of users with MS SQL Server; 
    https://leetcode.com/problems/consecutive-numbers/submissions/1221265004/
        Runtime 1330 ms Beats 44.28% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */
select distinct 
    l1.num as ConsecutiveNums 
from Logs l1 
inner join Logs l2 on l1.id = (l2.id + 1) 
inner join Logs l3 on l1.id = (l3.id + 2) 
where l1.num = l2.num and l2.num = l3.num 