/*
  https://leetcode.com/problems/bikes-last-time-used/submissions/1756551056/
    Runtime 319 ms Beats 94.12%
*/
/* Write your T-SQL query statement below */
with
RankList as (
  select
    [bike_number], 
    [end_time], 
    rank() over(partition by [bike_number] order by [end_time] desc) as [rank]
  from Bikes 
)

select 
  [bike_number], [end_time]
from RankList
where [rank] = 1
order by [end_time] desc