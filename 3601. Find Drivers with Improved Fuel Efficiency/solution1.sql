/*
  https://leetcode.com/problems/find-drivers-with-improved-fuel-efficiency/submissions/1788822101/
    Runtime 382 ms Beats 86.15% 
*/
/* Write your T-SQL query statement below */
with
HalfList as (
  select 
    [driver_id], 
    sum(
      case
        when left([trip_date], 7) >= '2023-01' and left([trip_date], 7) <= '2023-06' then 1
        else 0
      end
    ) as [first_half_count], 
    sum(
      case
        when left([trip_date], 7) >= '2023-07' and left([trip_date], 7) <= '2023-12' then 1
        else 0
      end
    ) as [second_half_count]
  from trips 
  group by [driver_id] 
), 
MarkedList as (
  select 
    *, 
    case
      when left([trip_date], 7) >= '2023-01' and left([trip_date], 7) <= '2023-06' then 1
      else 0
    end as [is_first_half], 
    case
      when left([trip_date], 7) >= '2023-07' and left([trip_date], 7) <= '2023-12' then 1
      else 0
    end as [is_second_half]
  from trips

),
AVGList as (
  select
    h.[driver_id], d.[driver_name], 
    
    sum(
      case 
        when m.[is_first_half] = 1 then m.[distance_km] / m.[fuel_consumed]
        else 0
      end 
    ) / 
    sum(m.[is_first_half]) as [first_half_avg], 
    sum(
      case 
        when m.[is_second_half] = 1 then m.[distance_km] / m.[fuel_consumed]
        else 0
      end 
    ) / 
    sum(m.[is_second_half]) as [second_half_avg]
  from HalfList h 
  inner join drivers d on d.[driver_id] = h.[driver_id] 
  inner join MarkedList m on h.[driver_id] = m.[driver_id]
  where h.[first_half_count] >= 1 and h.[second_half_count] >= 1
  group by h.[driver_id], d.[driver_name]
)

select 
  [driver_id], [driver_name], 
  round([first_half_avg], 2) as [first_half_avg], 
  round([second_half_avg], 2) as [second_half_avg], 
  round([second_half_avg] - [first_half_avg], 2) as [efficiency_improvement]
from AVGList 
where ([second_half_avg] - [first_half_avg]) > 0
order by [efficiency_improvement] desc, [driver_name]