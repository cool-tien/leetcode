/*
  https://leetcode.com/problems/find-latest-salaries/submissions/1758857090/
    Runtime 347 ms Beats 100.00% 
*/
/* Write your T-SQL query statement below */
select 
  [emp_id], [firstname], [lastname], max([salary]) as [salary], [department_id] 
from Salary 
group by [emp_id], [firstname], [lastname], [department_id] 