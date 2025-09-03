/*
  https://leetcode.com/problems/project-employees-ii/submissions/1757705265/
    Runtime 1992 ms Beats 60.00% 
*/
/* Write your T-SQL query statement below */
with
RankList as (
  select 
    [project_id], 
    -- count([project_id]) as [number_of_employees], 
    rank() over(order by count([project_id]) desc) as [rank]
  from Project
  group by [project_id]
)

select [project_id] from RankList 
where [rank] = 1 