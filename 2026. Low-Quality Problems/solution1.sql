/*
  https://leetcode.com/problems/low-quality-problems/submissions/1756536740/
    Runtime 682 ms Beats 64.29% 
*/
/* Write your T-SQL query statement below */
with
CTE as (
  select 
    [problem_id], 
    [likes] * 1.0 / ([likes] + [dislikes]) as [rate]
  from Problems 
)

select [problem_id] from CTE
where [rate] <= 0.6 
order by [problem_id]