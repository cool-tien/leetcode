/*
  https://leetcode.com/problems/total-traveled-distance/submissions/1787812956/
    Runtime 338 ms Beats 100.00% 
*/
/* Write your T-SQL query statement below */
select 
  u.[user_id], u.[name], 
  isnull(sum(r.[distance]), 0) as [traveled distance]
from Users u 
left join Rides r on r.[user_id] = u.[user_id] 
group by u.[user_id], u.[name]
order by u.[user_id] 