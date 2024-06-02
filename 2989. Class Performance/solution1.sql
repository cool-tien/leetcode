/*
    https://leetcode.com/problems/class-performance/submissions/1275058301/
*/
WITH
Score_List AS (
    SELECT 
        [student_id], 
        ([assignment1] + [assignment2] + [assignment3]) AS [total_score]
    FROM Scores 
)

SELECT 
    (SELECT MAX([total_score]) FROM Score_List) - 
    (SELECT MIN([total_score]) FROM Score_List)
AS [difference_in_score]