/*
  https://leetcode.com/problems/all-the-matches-of-the-league/submissions/1756526093/
    Runtime 318 ms Beats 63.64%
*/
/* Write your T-SQL query statement below */
select
  t1.[team_name] as [home_team], t2.[team_name] as [away_team]
from Teams t1
inner join Teams t2 on t1.[team_name] != t2.[team_name]