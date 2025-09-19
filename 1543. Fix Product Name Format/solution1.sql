/*
  https://leetcode.com/problems/fix-product-name-format/submissions/1775579452/
    Runtime 514 ms Beats 71.43% 
*/
/* Write your T-SQL query statement below */
select
  lower(trim([product_name])) as [product_name], 
  left([sale_date], 7) as [sale_date], 
  count([sale_id]) as [total]
from Sales 
group by lower(trim([product_name])), left([sale_date], 7)
order by 1, 2