/*
    https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/submissions/1276806217/
*/
SELECT
    p.[salesperson_id], p.[name], 
    ISNULL(SUM(s.[price]), 0) AS [total]
FROM Salesperson p 
LEFT JOIN Customer c ON c.[salesperson_id] = p.[salesperson_id]
LEFT JOIN Sales s ON s.[customer_id] = c.[customer_id]
GROUP BY p.[salesperson_id], p.[name]