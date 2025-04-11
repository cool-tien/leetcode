/*
  https://leetcode.com/problems/premier-league-table-ranking-iii/submissions/1603529729/
*/
with
PointList as (
  select
    [season_id], [team_id], [team_name], 
    
    ([wins] * 3 + [draws]) as [points], 
    ([goals_for] - [goals_against]) as [goal_difference] 
  from SeasonStats 
), 
Ranking as (
  select 
    *, 
    rank() over (
      partition by [season_id] 
      order by [points] desc, [goal_difference] desc, [team_name]
    ) as [position]
  from PointList 
)

select * from Ranking 
order by [season_id], [position], [team_name]