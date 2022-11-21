/*
    656 ~ 698 ms    (66.92% ~ 85.18%)

    https://leetcode.com/submissions/detail/847303521/
        Runtime: 656 ms, faster than 85.18% of MS SQL Server online submissions for Customers Who Never Order.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customers Who Never Order.
    https://leetcode.com/submissions/detail/847305295/
        Runtime: 696 ms, faster than 67.71% of MS SQL Server online submissions for Customers Who Never Order.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customers Who Never Order.
    https://leetcode.com/submissions/detail/847305386/
        Runtime: 698 ms, faster than 66.92% of MS SQL Server online submissions for Customers Who Never Order.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customers Who Never Order.
*/
/* Write your T-SQL query statement below */
select 
    [name] as [Customers]
from Customers
where [id] not in (
    select distinct
        [customerId] 
    from Orders
)