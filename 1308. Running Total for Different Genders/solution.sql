/*
    https://leetcode.com/problems/running-total-for-different-genders/submissions/1276801027/
*/
SELECT 
    [gender], [day], 
    SUM([score_points]) OVER(PARTITION BY [gender] ORDER BY [day]) AS [total]
FROM Scores 
ORDER BY [gender], [day]