/*
  https://leetcode.com/problems/create-a-session-bar-chart/submissions/1773382790/
    Runtime 319 ms Beats 50.00% 
*/
/* Write your T-SQL query statement below */
with
SessionList as (
  select 
    sum(case when [duration] < (5 * 60) then 1 else 0 end) as [[-5>], 
    sum(case when [duration] >= (5 * 60) and [duration] < (10 * 60) then 1 else 0 end) as [[5-10>], 
    sum(case when [duration] >= (10 * 60) and [duration] < (15 * 60) then 1 else 0 end) as [[10-15>], 
    sum(case when [duration] >= (15 * 60) then 1 else 0 end) as [15 or more]
  from Sessions
)

select '[0-5>' as [bin], [[-5>] as [total] from SessionList
union all 
select '[5-10>', [[5-10>] from SessionList
union all 
select '[10-15>', [[10-15>] from SessionList
union all 
select '15 or more', [15 or more] from SessionList