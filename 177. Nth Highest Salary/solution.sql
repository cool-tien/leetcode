/*

https://leetcode.com/problems/nth-highest-salary/submissions/1283360574/

# Intuition
My first thought is use the RANK() to solve this problem, but when exist same [salary] the [rank_id] will generate different ID.

# Approach
Use DENSE_RANK() for same value will generate same [rank_id] id, then DISTINCT or TOP 1 can limit the return result with only one row.

### Example: 
Employee =
| id | salary |
| -- | ------ |
| 1  | 100    |
| 2  | 100    |

argument = 1

| getNthHighestSalary(1) |
| ---------------------- |
| 100                    |

argument = 2

| getNthHighestSalary(2) |
| ---------------------- |
| null                   |

*/
CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        SELECT 
            [salary]
        FROM (
            SELECT DISTINCT 
                [salary], 
                DENSE_RANK() OVER(ORDER BY [salary] DESC) AS [rank_id]
            FROM Employee 
        ) temp
        WHERE [rank_id] = @N
    );
END