/*
    https://leetcode.com/submissions/detail/684527170/
    Runtime: 1410 ms, faster than 68.59% of MS SQL Server online submissions for Actors and Directors Who Cooperated At Least Three Times.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Actors and Directors Who Cooperated At Least Three Times.
*/
/* Write your T-SQL query statement below */

select
    [actor_id], [director_id]
from ActorDirector 
group by [actor_id], [director_id]
having count([actor_id]) >= 3 and count([director_id]) >= 3