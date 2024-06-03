/*
    https://leetcode.com/problems/median-employee-salary/submissions/1275928205/
*/
WITH
/*
    Generate the company extend info: 
    - number of employee in that company
    - the base of median number
    - mark the number of employee is odd or even
*/
Company_List AS (
    SELECT 
        [company], COUNT([company]) AS [num_of_employee], 
        (COUNT([company]) / 2) AS [median_base], 
        (COUNT([company]) % 2) AS [is_odd]
    FROM Employee
    GROUP BY [company]
), 
Rank_List AS (
    SELECT 
        *, 
        RANK() OVER(PARTITION BY [company] ORDER BY [salary] ASC, [id] ASC) AS [rank_id]
    FROM Employee
)

SELECT
    r.[id], r.[company], r.[salary]
FROM Rank_List r
INNER JOIN Company_List c ON c.[company] = r.[company]
WHERE 
    (c.[median_base] + 1 = r.[rank_id]) OR
    (c.[median_base] = r.[rank_id] AND c.[is_odd] = 0)
/*
    Conditions example:
    a.) median_base = (int) 6 / 2 + 1 = 3 + 1 = 4
    b.) median_base = (int) 6 / 2 = 3 AND the company's employee is even (result will include above a.)
*/