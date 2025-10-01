/*
  https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/submissions/1787814882/
    Runtime 315 ms Beats 78.57% 
*/
/* Write your T-SQL query statement below */
select
  [artist], count([id]) as [occurrences]
from Spotify
group by [artist] 
order by 2 desc, 1