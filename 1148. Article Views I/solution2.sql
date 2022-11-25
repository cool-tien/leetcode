/*
    1514 ~ 2110 ms  (43.68% ~ 99.22%)

    https://leetcode.com/submissions/detail/849388419/
        Runtime: 1514 ms, faster than 99.22% of MS SQL Server online submissions for Article Views I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Article Views I.
    https://leetcode.com/submissions/detail/849390299/
        Runtime: 2110 ms, faster than 43.68% of MS SQL Server online submissions for Article Views I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Article Views I.
    https://leetcode.com/submissions/detail/849390387/
        Runtime: 1714 ms, faster than 83.48% of MS SQL Server online submissions for Article Views I.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Article Views I.
*/
/* Write your T-SQL query statement below */
select
    [viewer_id] as [id]
from Views
where [author_id] = [viewer_id]
group by [viewer_id]
having count([viewer_id]) >= 1