/*
  https://leetcode.com/problems/npv-queries/submissions/1756539976/
    Runtime 983 ms Beats 20.00%
*/
/* Write your T-SQL query statement below */
select 
  q.[id], q.[year], 
  isnull(n.[npv], 0) as [npv]
from Queries q
left join NPV n on n.[id] = q.[id] and n.[year] = q.[year]