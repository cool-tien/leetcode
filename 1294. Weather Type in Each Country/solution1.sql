/*
  https://leetcode.com/problems/weather-type-in-each-country/submissions/1775584404/
    Runtime 630 ms Beats 30.00%
*/
/* Write your T-SQL query statement below */
select
  c.[country_name], 
  case
    when avg(w.[weather_state] * 1.0) <= 15 then 'Cold'
    when avg(w.[weather_state] * 1.0) >= 25 then 'Hot'
    else 'Warm'
  end as [weather_type]
from Weather w
inner join Countries c on c.[country_id] = w.[country_id]
where left(w.[day], 7) = '2019-11'
group by c.[country_name]