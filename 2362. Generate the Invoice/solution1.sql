/*
    https://leetcode.com/problems/generate-the-invoice/submissions/1273929736/
*/
WITH 
Invoice_Payment AS (
    SELECT
        Purchases.[invoice_id], 
        SUM(Purchases.[quantity] * Products.[price]) AS [invoice_payment]
    FROM Purchases 
    INNER JOIN Products ON Products.[product_id] = Purchases.[product_id]
    GROUP BY Purchases.[invoice_id]
)

SELECT 
    Purchases.[product_id], Purchases.[quantity], 
    (Products.[price] * Purchases.[quantity]) AS [price]
FROM Purchases
INNER JOIN Products ON Products.[product_id] = Purchases.[product_id]
WHERE Purchases.[invoice_id] = (
    --  get the highest payment amount, if exist same use smallest id
    SELECT TOP 1 [invoice_id] FROM Invoice_Payment
    ORDER BY [invoice_payment] DESC, [invoice_id]
)