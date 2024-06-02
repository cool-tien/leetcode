/*
    https://leetcode.com/problems/friday-purchases-ii/submissions/1274901908/
*/
WITH
--  generate the Friday of November 2023
Week_of_Friday AS (
    SELECT
        1 AS [week_of_month], 
        CAST('2023-11-03' AS DATE) AS [purchase_date]
    UNION ALL
    SELECT
        ([week_of_month] + 1) AS [week_of_month], 
        CAST(DATEADD(week, 1, [purchase_date]) AS DATE) AS [purchase_date]
    FROM Week_of_Friday
    --  after add a week, still within the month
    WHERE CAST(DATEADD(week, 1, [purchase_date]) AS DATE) <= '2023-11-30'
)

SELECT
    fri.[week_of_month], fri.[purchase_date], 
    ISNULL(SUM(p.[amount_spend]), 0) AS [total_amount]
FROM Week_of_Friday fri
LEFT JOIN Purchases p ON p.[purchase_date] = fri.[purchase_date]
GROUP BY fri.[week_of_month], fri.[purchase_date]