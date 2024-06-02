/*
    https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/submissions/1275097516/
*/
WITH
--  The cusomter list only order type 1 
OrderI AS (
    SELECT 
        o1.*
    FROM Orders o1 
    LEFT JOIN Orders o2 ON 
        o1.[customer_id] = o2.[customer_id] AND 
        o1.[order_id] != o2.[order_id] AND 
        o2.[order_type] = 0 
    WHERE o1.[order_type] = 1 AND o2.[order_type] IS NULL
)

SELECT * FROM OrderI
UNION ALL 
SELECT * FROM Orders
WHERE [order_type] = 0