/*
    https://leetcode.com/problems/class-performance/submissions/1275142082/
*/
SELECT
    (
        MAX([assignment1] + [assignment2] + [assignment3]) - 
        MIN([assignment1] + [assignment2] + [assignment3]) 
    ) AS [difference_in_score]
FROM Scores