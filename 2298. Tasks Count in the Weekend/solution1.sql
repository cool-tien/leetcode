/*  
    [Ugly solution]
    Can rewrite in SUM(CASE...)

    https://leetcode.com/problems/tasks-count-in-the-weekend/submissions/1276814402/
*/
SELECT
    (
        SELECT
            COUNT([submit_date])
        FROM Tasks 
        WHERE DATEPART(DW, [submit_date]) IN (1, 7)
    ) AS [weekend_cnt], 
    (
        SELECT
            COUNT([submit_date])
        FROM Tasks 
        WHERE DATEPART(DW, [submit_date]) >= 2 AND DATEPART(DW, [submit_date]) <= 6
    ) AS [working_cnt]