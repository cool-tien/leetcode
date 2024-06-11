/*
    https://leetcode.com/problems/human-traffic-of-stadium/submissions/1284518827/

    Window Function with "LEAD" and "LAG"
*/
WITH 
CTE AS (
    SELECT 
        *, 
        --  the value of next one and two row [people]
        LEAD([people], 1, 0) OVER (ORDER BY [id]) AS [next_1], 
        LEAD([people], 2, 0) OVER (ORDER BY [id]) AS [next_2], 
        --  the value of previous one and two row [people]
        LAG([people], 1, 0) OVER (ORDER BY [id]) AS [prev_1], 
        LAG([people], 2, 0) OVER (ORDER BY [id]) AS [prev_2]
    FROM Stadium
)

SELECT 
    [id], [visit_date], [people] 
FROM CTE
WHERE 
    --  current & next 1 & next 2
    ([people] >= 100 AND [next_1] >= 100 AND [next_2] >= 100) OR 
    --  prev 1 & current & next 1
    ([prev_1] >= 100 AND [people] >= 100 AND [next_1] >= 100) OR 
    --  prev 2 & prev 1 & current
    ([prev_2] >= 100 AND [prev_1] >= 100 AND [people] >= 100)