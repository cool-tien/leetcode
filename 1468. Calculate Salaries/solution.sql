/*
    https://leetcode.com/problems/calculate-salaries/submissions/1276823744/
*/
WITH
--  The max salary employee of company
Company AS (
    SELECT
        [company_id], MAX([salary]) AS [max_salary]
    FROM Salaries
    GROUP BY [company_id]
)

SELECT
    s.[company_id], s.[employee_id], s.[employee_name], 
    CASE
        WHEN c.[max_salary] > 10000 THEN ROUND(s.[salary] * 0.51, 0)
        WHEN c.[max_salary] >= 1000 THEN ROUND(s.[salary] * 0.76, 0)
        ELSE s.[salary]
    END AS [salary]
FROM Salaries s 
INNER JOIN Company c ON c.[company_id] = s.[company_id]