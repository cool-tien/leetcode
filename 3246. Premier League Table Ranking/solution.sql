/*
  https://leetcode.com/problems/premier-league-table-ranking/submissions/1603618719/
*/
select 
  [team_id], [team_name], 
  ([wins] * 3 + [draws]) as [points], 
  rank() over(order by ([wins] * 3 + [draws]) desc) as [position]
from TeamStats 
order by [position], [team_name] 