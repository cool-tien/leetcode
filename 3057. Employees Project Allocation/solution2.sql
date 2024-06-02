/*
    https://leetcode.com/problems/employees-project-allocation/submissions/1275045750/
*/
WITH
--  generate the average workload by team
Team_Workload AS (
    SELECT
        e.[team], AVG(CAST(p.[workload] AS FLOAT)) AS [average_workload]
    FROM Project p
    INNER JOIN Employees e ON e.[employee_id] = p.[employee_id]
    GROUP BY e.[team]
)

SELECT
    e.[employee_id], p.[project_id], 
    e.[name] AS [employee_name], 
    p.[workload] AS [project_workload]
FROM Project p
INNER JOIN Employees e ON e.[employee_id] = p.[employee_id]
INNER JOIN Team_Workload t ON 
    t.[team] = e.[team] AND 
    p.[workload] > t.[average_workload]
ORDER BY e.[employee_id], p.[project_id]