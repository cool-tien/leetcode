/*
    https://leetcode.com/problems/find-the-missing-ids/submissions/1274912577/
*/
WITH 
Max_ID AS (
    SELECT MAX([customer_id]) AS [id] FROM Customers
), 
ID_List AS (
    SELECT 1 AS ids 
    UNION ALL 
    SELECT [ids] + 1 FROM ID_List
    WHERE [ids] + 1 <= (
        SELECT [id] FROM Max_ID
    )
)

SELECT * FROM ID_List list
WHERE [ids] NOT IN (
    SELECT [customer_id] FROM Customers 
)
/*
WHERE NOT EXISTS (
    SELECT [customer_id] FROM Customers 
    WHERE [customer_id] = list.[ids]
)
*/