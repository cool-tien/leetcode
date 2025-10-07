/*
  https://leetcode.com/problems/concatenate-the-name-and-the-profession/submissions/1793718642/
    Runtime 450 ms Beats 84.62% 
*/
/* Write your T-SQL query statement below */
select 
  [person_id], [name] + '(' + substring([profession], 1, 1) + ')' as [name]
from Person 
order by [person_id] desc