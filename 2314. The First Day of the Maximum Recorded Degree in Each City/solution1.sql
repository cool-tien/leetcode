/*
  https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/submissions/1783793860/
    Runtime 877 ms Beats 100.00%
*/
/* Write your T-SQL query statement below */
with
RankList as (
  select
    *, 
    rank() over(
      partition by [city_id] order by [degree] desc, [day]
    ) as [rank]
  from Weather
)

select
  [city_id], [day], [degree]
from RankList 
where [rank] = 1