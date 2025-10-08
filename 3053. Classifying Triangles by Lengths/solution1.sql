/*
  https://leetcode.com/problems/classifying-triangles-by-lengths/submissions/1794827167/
    Runtime 240 ms Beats 100.00% 
*/
/* Write your T-SQL query statement below */
select 
  case
    when [A] = [B] and [B] = [C] then 'Equilateral'
    when [A] + [B] <= [C] or [B] + [C] <= [A] or [A] + [C] <= [B] then 'Not A Triangle'
    when [A] = [B] or [B] = [C] or [A] = [C] then  'Isosceles'
    else 'Scalene'
  end as [triangle_type]
from Triangles