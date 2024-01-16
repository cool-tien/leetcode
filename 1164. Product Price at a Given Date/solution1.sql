/*
    1828 ~ 2313 ms  (44.05% ~ 79.33%)
    
    https://leetcode.com/problems/product-price-at-a-given-date/submissions/1147407568/
        Runtime 1828 ms Beats 79.33%; 
    https://leetcode.com/problems/product-price-at-a-given-date/submissions/1147410011/
        Runtime 2030 ms Beats 63.18%; 
    https://leetcode.com/problems/product-price-at-a-given-date/submissions/1147410200/
        Runtime 2313 ms Beats 44.05%; 

*/
/* Write your T-SQL query statement below */

with
Unique_ID as (
    select distinct 
        [product_id] 
    from Products 
), 
Latest_Price as (
    select 
        p.[product_id], 
        (
            select [new_price] from Products
            where 
                [product_id] = p.[product_id] and 
                [change_date] = max(p.[change_date])
        ) as [price]
    from Products p
    where [change_date] <= '2019-08-16' 
    group by p.[product_id]
)

select 
    Unique_ID.[product_id], 
    isnull(Latest_Price.[price], 10) as [price] 
from Unique_ID
left join Latest_Price on Latest_Price.[product_id] = Unique_ID.[product_id]