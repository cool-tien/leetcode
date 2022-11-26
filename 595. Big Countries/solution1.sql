/*
    1129 ~ 1167 ms  (76.88% ~ 86.72%)

    https://leetcode.com/submissions/detail/847180953/
        Runtime: 1129 ms, faster than 86.72% of MS SQL Server online submissions for Big Countries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Big Countries.
    https://leetcode.com/submissions/detail/847182376/
        Runtime: 1200 ms, faster than 76.88% of MS SQL Server online submissions for Big Countries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Big Countries.
    https://leetcode.com/submissions/detail/847182452/
        Runtime: 1167 ms, faster than 81.11% of MS SQL Server online submissions for Big Countries.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Big Countries.
*/
/* Write your T-SQL query statement below */
select
    [name], [population], [area]
from World
where [area] >= 3000000 or [population] >= 25000000