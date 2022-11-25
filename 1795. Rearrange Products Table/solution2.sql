/*
    640 ~ 888 ms    (34.06% ~ 95.12%)

    https://leetcode.com/submissions/detail/848872272/
        Runtime: 725 ms, faster than 62.10% of MS SQL Server online submissions for Rearrange Products Table.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rearrange Products Table.
    https://leetcode.com/submissions/detail/848872326/
        Runtime: 640 ms, faster than 95.12% of MS SQL Server online submissions for Rearrange Products Table.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rearrange Products Table.
    https://leetcode.com/submissions/detail/848873185/
        Runtime: 888 ms, faster than 34.06% of MS SQL Server online submissions for Rearrange Products Table.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rearrange Products Table.
*/
/* Write your T-SQL query statement below */
select 
    [product_id], 'store1' as [store], [store1] as [price]
from Products
where [store1] is not null
union all
select 
    [product_id], 'store2' as [store], [store2] as [price]
from Products
where [store2] is not null
union all
select 
    [product_id], 'store3' as [store], [store3] as [price]
from Products
where [store3] is not null