/*
  https://leetcode.com/problems/reported-posts-ii/submissions/1757735231/
    Runtime 1681 ms Beats 50.91%
*/
/* Write your T-SQL query statement below */
with
CTE as (
  select
    a.[action_date], 
    count(
      distinct case when a.[post_id] = r.[post_id] then r.[post_id] end
    ) as [total_removed],
    cast(count(distinct a.[post_id]) as float) as [total_reported]
  from Actions a 
  left join Removals r on r.[post_id] = a.[post_id]
  where a.[extra] = 'spam'
  group by [action_date]
)

select 
  round(avg([total_removed] / [total_reported] * 100), 2) as [average_daily_percent]
from CTE 