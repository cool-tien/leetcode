/*
    https://leetcode.com/submissions/detail/684512979/
    Runtime: 1186 ms, faster than 51.15% of MS SQL Server online submissions for Sales Person.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Sales Person.
*/
/* Write your T-SQL query statement below */

with
RED_Sales as (
    select
        [sales_id]
    from Orders
    where [com_id] in (
        select [com_id] from Company
        where [name] = 'RED'
    )
)
select [name] from SalesPerson 
where [sales_id] not in (
    select [sales_id] from RED_Sales
)