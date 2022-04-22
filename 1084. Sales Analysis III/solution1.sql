/*
    https://leetcode.com/submissions/detail/685205006/
    Runtime: 4329 ms, faster than 79.83% of MS SQL Server online submissions for Sales Analysis III.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Sales Analysis III.
*/
/* Write your T-SQL query statement below */

with
other_month as (
    select distinct
        [product_id] 
    from Sales 
    where [sale_date] <= '2018-12-31' or [sale_date] >= '2019-04-01'
)

select distinct
    Sales.[product_id], Product.[product_name]
from Sales
inner join Product on Product.[product_id] = Sales.[product_id]
where Sales.[sale_date] >= '2019-01-01' and Sales.[sale_date] <= '2019-03-31' and
Sales.[product_id] not in (
    select [product_id] from other_month
)
