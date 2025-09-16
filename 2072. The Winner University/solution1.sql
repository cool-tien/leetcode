/*
  https://leetcode.com/problems/the-winner-university/submissions/1772185120/
    Runtime 723 ms Beats 83.33% 
*/
/* Write your T-SQL query statement below */
with
NY_excellent as (
  select 
    count([score]) as [numbers]
  from NewYork
  where [score] >= 90
), 
C_excellent as (
  select 
    count([score]) as [numbers]
  from California 
  where [score] >= 90
)

select 
  case
    when n.[numbers] > c.[numbers] then 'New York University'
    when n.[numbers] < c.[numbers] then 'California University'
    else 'No Winner'
  end as [winner]
from NY_excellent n, C_excellent c