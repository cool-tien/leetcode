/*
  https://leetcode.com/problems/ads-performance/submissions/1758845697/
    Runtime 589 ms Beats 94.59% 
*/
/* Write your T-SQL query statement below */
with
CTE as (
  select
    [ad_id], 
    sum(case when [action] = 'Clicked' then 1.0 else 0.0 end) as [total_clicked], 
    sum(case when [action] in ('Viewed', 'Clicked') then 1.0 else 0.0 end) as [total_viewed]
  from Ads 
  group by [ad_id]
)

select
  [ad_id], 
  case
    when [total_clicked] = 0 then 0 
    else round([total_clicked] / [total_viewed] * 100, 2)
  end as [ctr]
from CTE
order by [ctr] desc, [ad_id]