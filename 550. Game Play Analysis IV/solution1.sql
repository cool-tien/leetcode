/*
    2940 ~ 3804 ms  (25.92% ~ 70.78%)
    
    https://leetcode.com/problems/game-play-analysis-iv/submissions/1220968181/
        Runtime 2940 ms Beats 70.78% of users with MS SQL Server; 
    https://leetcode.com/problems/game-play-analysis-iv/submissions/1220969872/
        Runtime 2963 ms Beats 69.71% of users with MS SQL Server; 
    https://leetcode.com/problems/game-play-analysis-iv/submissions/1220969872/
        Runtime 3804 ms Beats 25.92% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */

with 
Consecutive_Login as (
    select 
        player_id, 
        case 
            when
                --  check is current event_date = next date
                datediff(day, 
                    --   first date of login
                    min(event_date) over (
                        partition by player_id
                        order by event_date
                    ), 
                    event_date
                ) = 1
            then 1.0
            else 0.0
        end as flag
    from Activity
)

select
    round(
        sum(flag)
        /
        --  same data type(float), not need convert again will improve performance 
        cast((select count(distinct player_id) from Consecutive_Login) as float)
    , 2) as fraction
from Consecutive_Login