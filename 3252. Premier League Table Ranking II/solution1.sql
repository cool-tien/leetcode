/*
  https://leetcode.com/problems/premier-league-table-ranking-ii/submissions/1603606941/?envType=problem-list-v2&envId=database
*/
with 
PointList as (
  select 
    [team_name], 
    ([wins] * 3 + [draws]) as [points], 
    rank() over(order by ([wins] * 3 + [draws]) desc) as [position]
  from TeamStats 
), 
Team as (
  select 
    count([team_name]) as [total_team], 
    cast(count([team_name]) * 0.33 as int) + 1 as [tier1], 
    cast(count([team_name]) * 0.66 as int) + 1 as [tier2]
    
  from TeamStats
)

select 
  list.*, 
  --  Campare the tier position 
  case
    when list.[position] <= team.[tier1] then 'Tier 1' 
    when list.[position] <= team.[tier2] then 'Tier 2' 
    else 'Tier 3'
  end as [tier]
from PointList list 
left join Team team on list.[team_name] is not null
order by list.[points] desc, list.[team_name] 